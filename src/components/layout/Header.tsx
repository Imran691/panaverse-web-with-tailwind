import Image from "next/image";
import Logo from "/public/images/panaverse-logo.png";
import React from "react";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky top-0  bg-white z-10">
      <Wrapper>
        <header className="flex justify-between items-center py-4 ">
          <div>
            {/* <h2>Panaverse DAO</h2> */}
            <Image src={Logo} alt="Panaverse DAO Logo" />
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href={"/"}> Home </Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
          </ul>
        </header>
      </Wrapper>
    </header>
  );
};

export default Header;
