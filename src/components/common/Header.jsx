import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LIST } from "@/utils/helper";

const Header = () => {
  return (
    <nav className="flex items-center justify-between pt-[30px]">
      <Link href="/">
        <Image
          src="/assets/images/webp/header-logo.webp"
          alt="logo"
          width={262}
          height={75}
          className="w-full max-w-[262px] max-sm:max-w-[120px] hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="flex items-center">
        <div className=""></div>
        <ul className="flex items-center gap-2">
          {SOCIAL_LIST.map((item, i) => (
            <li key={i}>
              <Link target="_blank" href={item.link}>
                <Image
                  src={item.image}
                  alt="social-logo"
                  width={77}
                  height={67}
                  className="w-full max-w-[77px] max-sm:max-w-[34px] hover:scale-115 transition-all duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
