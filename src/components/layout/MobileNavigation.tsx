"use client";

import { IconClose } from "@/components/icons/icon-close";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../ui/navItem";
import { navItems } from "@/data";

interface Props {
  closeHandler: () => void;
}

const MobileNavigation = ({ closeHandler }: Props) => {
  return (
    <div>
      <div className="p-5 text-primary-900">
        <div className="flex justify-between items-center">
          <Link href="/home">
            <Image
              height={100}
              width={100}
              src="/ggic-logo.png"
              alt="grace to grace international church"
              className="w-25 lg:w-45 h-auto"
            />
          </Link>
          <IconClose
            className="size-8 text-primary-900"
            onClick={closeHandler}
          />
        </div>

        <nav className="flex flex-col gap-10 mt-4">
          {navItems.map((lin, index) => (
            <div key={index}>
              <NavItem className="text-2xl" href={lin.href}>
                {lin.name}
              </NavItem>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
