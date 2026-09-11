export type AscfData = {
  fps: number;
  cols: number;
  rows: number;
  totalFrames: number;
  getFrame: (index: number) => string;
};

function parseAscf(raw: Uint8Array): AscfData {
  if (raw.length < 18) throw new Error("ASCF file too small");
  const dv = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
  const magic = String.fromCharCode(raw[0], raw[1], raw[2], raw[3]);
  if (magic !== "ASC2" && magic !== "ASCF") {
    throw new Error("Not an ASCF file");
  }

  const fps = dv.getFloat32(4, false);
  const mode = dv.getUint8(8);
  const cols = dv.getUint16(10, false);
  const rows = dv.getUint16(12, false);

  if (mode !== 1) {
    throw new Error("Only mode-1 (text) ASCF is supported");
  }

  let totalFrames = 0;
  let off = 14;
  if (magic === "ASC2") {
    totalFrames = dv.getUint32(14, false);
    off = 18;
  }

  const starts: number[] = [];
  const lengths: number[] = [];
  while (off + 4 <= raw.length) {
    const len = dv.getUint32(off, false);
    off += 4;
    if (len <= 0 || off + len > raw.length) break;

    // Each frame payload is: "<frameIndex>\n<ascii grid>"
    let newline = -1;
    const scanEnd = Math.min(off + 16, off + len);
    for (let i = off; i < scanEnd; i++) {
      if (raw[i] === 10) {
        newline = i;
        break;
      }
    }
    const dataStart = newline >= 0 ? newline + 1 : off;
    starts.push(dataStart);
    lengths.push(off + len - dataStart);
    off += len;
  }

  const count = starts.length;
  if (count === 0) throw new Error("ASCF has no frames");

  const decoder = new TextDecoder();

  return {
    fps,
    cols,
    rows,
    totalFrames: totalFrames || count,
    getFrame(index: number) {
      const i = ((index % count) + count) % count;
      return decoder.decode(raw.subarray(starts[i], starts[i] + lengths[i]));
    },
  };
}

export async function loadAscf(
  url: string,
  onProgress?: (fraction: number) => void
): Promise<AscfData> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status})`);

  const total = Number(res.headers.get("content-length") ?? 0);
  let bytes: Uint8Array;

  if (res.body && onProgress && total > 0) {
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.length;
      onProgress(Math.min(1, received / total));
    }
    const merged = new Uint8Array(received);
    let o = 0;
    for (const c of chunks) {
      merged.set(c, o);
      o += c.length;
    }
    bytes = merged;
  } else {
    bytes = new Uint8Array(await res.arrayBuffer());
    onProgress?.(1);
  }

  const stream = new Response(bytes).body!.pipeThrough(
    new DecompressionStream("gzip")
  );
  const raw = new Uint8Array(await new Response(stream).arrayBuffer());
  return parseAscf(raw);
}
