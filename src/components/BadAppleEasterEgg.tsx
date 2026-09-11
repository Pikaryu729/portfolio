"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const BadApplePlayer = dynamic(() => import("./BadApplePlayer"), {
  ssr: false,
});

export default function BadAppleEasterEgg() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (window.location.hash === "#bad-apple") setOpen(true);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Run the Bad Apple ASCII easter egg"
        className="group inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-emerald-500">guest@ryushin</span>
        <span>:~$</span>
        <span className="text-foreground transition-colors group-hover:text-brand">
          ./bad_apple
        </span>
        <span className="animate-pulse text-brand">▊</span>
      </button>
      {open && <BadApplePlayer onClose={() => setOpen(false)} />}
    </>
  );
}
