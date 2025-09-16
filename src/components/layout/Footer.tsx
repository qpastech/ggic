import React from "react";
import BtnLink from "../ui/BtnLink";
import Image from "next/image";
import { navItems } from "@/data";
import NavItem from "../ui/navItem";
import IconFacebook from "../icons/icon-facebook";
import Link from "next/link";

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

        <div className="flex justify-center lg:justify-start items-center gap-4 mx-auto lg:mx-0 mt-10 lg:ml-7">
          <Link
            href="https://www.facebook.com/GGICGraceland/?locale=en_GB"
            target="_blanc"
          >
            <IconFacebook className="size-10" />
          </Link>
          <Link
            href="https://www.instagram.com/explore/locations/340250429449495/grace-to-grace-international-church-ggic-graceland/"
            target="_blanc"
          >
            <Image
              width={30}
              height={30}
              className=""
              alt="instagram"
              src="/socials/instagram_logo_icon.png"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@ggic.graceland?is_from_webapp=1&sender_device=pc"
            target="_blanc"
          >
            <Image
              width={40}
              height={40}
              className=""
              alt="instagram"
              src="/socials/tiktok_icon.png"
            />
          </Link>
        </div>
      </div>

      <div className="lg:mt-11 w-full lg:w-100 lg:text-left text-center">
        <h3 className="mb-15 font-bold text-purple-800 text-3xl">Address</h3>
        <p className="mb-5 text-lg">Grace to Grace International Church</p>
        <p className="mb-5 text-lg">Redif, Graceland, Wantz Rd, Dagenham</p>
        <p className="text-lg">RM10 8PS</p>
      </div>

      <div className="lg:mt-8 w-full lg:w-fit lg:text-left text-center">
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
