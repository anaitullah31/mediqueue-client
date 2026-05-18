"use client";
import Link from "next/link";

const CustomLink = ({ path, children }) => {
  return <Link href={path}>{children}</Link>;
};

export default CustomLink;
