import Image from "next/image";
import Logo from "/public/panaverse-logo.png";
import React from "react";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between items-center bg-white py-4 sticky top-0">
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
  );
};

export default Header;
