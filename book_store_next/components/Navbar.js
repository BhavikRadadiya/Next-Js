import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={"/BookStore.png"} width={50} height={50} alt="logo" />
          <Link href={"/"}>
            <a className="ml-3 text-xl">Book Store</a>
          </Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/NewArrivals"}>
            <a className="mr-5 hover:text-gray-900">New Arrivals </a>
          </Link>
          <Link href={"/BestSellers"}>
            <a className="mr-5 hover:text-gray-900">Best Sellers</a>
          </Link>
          <Link href={"/AwardWinners"}>
            <a className="mr-5 hover:text-gray-900">Award Winners</a>
          </Link>
          <Link href={"/FeatureAuthors"}>
            <a className="mr-5 hover:text-gray-900">Featured Authors</a>
          </Link>
        </nav>
        <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Cart
        </div>
      </div>
    </header>
  );
}

export default Navbar;
