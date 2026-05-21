"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ path, children }) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`text-sm transition hover:text-primary ${
        isActive
          ? "font-semibold text-primary"
          : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;