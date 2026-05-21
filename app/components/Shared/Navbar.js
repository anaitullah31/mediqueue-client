"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import NavLinks from "../NavLinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tutors", href: "/tutors" },
  { label: "Add Tutor", href: "/add-tutor" },
  { label: "My Tutors", href: "/my-tutors" },
  { label: "My Booked Sessions", href: "/my-booked-sessions" },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="z-50 text-foreground lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            MediQueue
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLinks path="/">Home</NavLinks>
          <NavLinks path="/tutors">Tutors</NavLinks>

          {user && (
            <>
              <NavLinks path="/add-tutor">Add Tutor</NavLinks>
              <NavLinks path="/my-tutors">My Tutors</NavLinks>
              <NavLinks path="/my-booked-sessions">My Booked Sessions</NavLinks>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />

          {user ? (
            <button
              onClick={handleLogout}
              className="
            flex items-center justify-center
            rounded-lg bg-orange-400
            px-4 py-2 text-sm font-medium text-white
            transition hover:bg-orange-500
          "
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="
            flex items-center justify-center
            rounded-lg bg-orange-400
            px-4 py-2 text-sm font-medium text-white
            transition hover:bg-orange-500
          "
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {open && (
          <div className="absolute left-0 top-16 z-40 w-full border-t border-border bg-background shadow-lg lg:hidden">
            <div className="flex flex-col gap-5 px-6 py-6">
              <NavLinks path="/">Home</NavLinks>
              <NavLinks path="/tutors">Tutors</NavLinks>

              {user && (
                <>
                  <NavLinks path="/add-tutor">Add Tutor</NavLinks>
                  <NavLinks path="/my-tutors">My Tutors</NavLinks>
                  <NavLinks path="/my-booked-sessions">
                    My Booked Sessions
                  </NavLinks>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
