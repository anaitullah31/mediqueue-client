import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              MediQueue
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Empowering the next generation of medical professionals through
              elite mentorship and data-driven learning.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Medical Board Standards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Support</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Newsletter
            </h3>

            <form className="mt-5 flex max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="
                  w-full rounded-l-lg border border-border
                  bg-muted px-4 py-2 text-sm text-foreground
                  outline-none placeholder:text-muted-foreground
                  focus:border-primary
                "
              />

              <button
                type="submit"
                className="
                  rounded-r-lg bg-primary px-4 py-2
                  text-sm font-medium text-primary-foreground
                  transition hover:opacity-90
                "
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 MediQueue Medical Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}