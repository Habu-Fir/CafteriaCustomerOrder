import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src={'/img/R.jpg'} width={50} height={50}></Image>
        </div>
        <div className="hidden md:flex space-x-6 ">
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Pricing</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Product</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">About Us</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Community</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Careers</a>
          </Link>
        </div>
        <a
          href="#"
          className="hidden md:block  bg-brightRed hover:bg-brightRedLight p-2 mt-4  px-6 pt-1 self-baseline rounded-full text-white "
        >
          Checkout
        </a>
        <div className="hidden md:flex shrink w-13 sm:order-2 relative h-13 right-0 items-end">
          <Image src={'/img/cart.png'} alt="Cart" width={50} height={50} />
          <div className="absolute top-3 right-2 h-5 w-5  text-white font-bold rounded-full text-center bg-red-600">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
