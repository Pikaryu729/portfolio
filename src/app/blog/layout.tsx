export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="py-12">{children}</section>
}
