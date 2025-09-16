import React from "react";
import BtnLink from "../ui/BtnLink";
import Image from "next/image";
import { navItems } from "@/data";
import NavItem from "../ui/navItem";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-20 bg-purple-200 px-10 lg:px-25 py-25">
      <div className="w-full lg:w-100 lg:text-left text-center">
        <Image
          height={100}
          width={100}
          src="/ggic-logo.png"
          alt="grace to grace international church"
          className="mx-auto lg:mx-0 w-40 lg:w-45 h-auto"
        />
        <h3 className="mb-3 lg:ml-7 font-bold text-purple-800 text-3xl">
          New Here?
        </h3>
        <p className="bg-green mb-3 lg:ml-7 text-lg">
          Expect a warm welcome, heartfelt worship, and a message of hope.
        </p>
        <BtnLink className="lg:ml-7" href="/join-us">
          Join Us
        </BtnLink>
      </div>

      <div className="lg:mt-11 w-full lg:w-100 lg:text-left text-center">
        <h3 className="mb-15 font-bold text-purple-800 text-3xl">Address</h3>
        <p className="mb-5 text-lg">Grace to Grace International Church</p>
        <p className="mb-5 text-lg">Redif, Graceland, Wantz Rd, Dagenham</p>
        <p className="text-lg">RM10 8PS</p>
      </div>

      <div className="lg:mt-8 w-full lg:w-100 lg:text-left text-center">
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((lin, index) => (
            <div key={index}>
              <NavItem
                className="hover:border-transparent text-lg"
                href={lin.href}
              >
                {lin.name}
              </NavItem>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
