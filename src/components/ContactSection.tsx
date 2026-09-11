import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import MySocialIcons from "@/components/MySocialIcons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Contact
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Have a project in mind, a role to fill, or just want to say hi?
              Send a message and I&apos;ll get back to you as soon as I can.
            </p>

            <div className="pt-2">
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Find me elsewhere
              </p>
              <MySocialIcons iconSize={40} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 text-xl font-semibold">Send a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
