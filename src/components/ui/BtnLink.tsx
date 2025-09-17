import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};
const BtnLink = ({ href, children, className }: Props) => {
  return (
    <Link
      target="_blank"
      className={`inline-block bg-purple-500 px-5 py-3 rounded-xl font-bold text-white cursor-pointer text ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default BtnLink;
