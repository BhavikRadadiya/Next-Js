import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <Image src={"/Bookstore.png"} alt="content" width={100} height={40} layout="responsive" />
    </>
  );
}

export default Header;
