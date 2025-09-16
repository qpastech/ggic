"use client";

import React, { useState } from "react";
import NavItem from "../ui/navItem";
import Image from "next/image";
import BtnLink from "../ui/BtnLink";
import Modal from "../common/modal";
import MobileNavigation from "./MobileNavigation";
import { IconMenu } from "@/components/icons/icon-menu";
import { navItems } from "@/data";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const closeMobileNavHandler = () => {
    setShowMobileMenu(false);
  };
  return (
    <header>
      <Modal isOpen={showMobileMenu} onClose={closeMobileNavHandler}>
        <MobileNavigation closeHandler={closeMobileNavHandler} />
      </Modal>
      <nav className="hidden lg:flex justify-center gap-2 bg-purple-200 py-4">
        {navItems.map((lin, index) => (
          <div key={index}>
            <NavItem href={lin.href} matcher={lin.matcher}>
              {lin.name}
            </NavItem>
          </div>
        ))}
      </nav>
      <div className="flex justify-between items-center pr-6">
        <Image
          height={100}
          width={100}
          src="/ggic-logo.png"
          alt="grace to grace international church"
          className="w-25 lg:w-45 h-auto"
        />

        <div className="flex items-center gap-2">
          <BtnLink href="/events">Upcoming Events</BtnLink>
          <div className="md:hidden">
            <IconMenu
              className="fill-purple-900 size-8"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
