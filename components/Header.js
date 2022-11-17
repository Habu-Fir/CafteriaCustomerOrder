import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const getItemCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const [display, setDisplay] = useState(false);
  const setDisplayState = () => {
    setDisplay(!display);
  };

  return (
    <div className="relative container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image
            src={'/img/R.jpg'}
            width={70}
            height={70}
            className="rounded-full"
          ></Image>
        </div>
        <div className="hidden md:flex space-x-6 ">
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Home</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Pricing</a>
          </Link>
          <Link href={'/product'}>
            <a className="hover:text-darkGrayishBlue">Products</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">About Us</a>
          </Link>
          <Link href={'/'}>
            <a className="hover:text-darkGrayishBlue">Careers</a>
          </Link>
        </div>

        <button
          id="menu-btn"
          className={`${
            display ? 'open' : 'hamburger md:hidden  focus:outline-none'
          }`}
          onClick={setDisplayState}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <Link href={'/newCart'}>
          <div className="hidden md:flex shrink w-13 sm:order-2 relative h-13 right-0 items-end">
            <Image
              src={'/img/cart.png'}
              alt="Cart"
              width={50}
              height={50}
              className="h-full w-full cursor-pointer"
            />
            <div className="absolute cursor-pointer top-3 right-2 h-5 w-5  text-white font-bold rounded-full text-center bg-red-600">
              {getItemCount()}
            </div>
          </div>
        </Link>
        <div>
          <a href="/admin" className=" cursor-pointer hover:text-indigo-300">
            Admin
          </a>
        </div>
      </div>

      {display ? (
        <div className="md:hidden border rounded bg-blue-gray-50 shadow-lg">
          <div
            id="menu"
            className="relative rounded flex flex-col text-darkBlue items-center self-end py-8  mt-5 mb-2 space-y-6 font-bold  sm:w-auto sm:self-center left-2 right-2 drop-shadow-md"
          >
            <a href="#" className="hover:text-indigo-300">
              Pricing
            </a>
            <a href="#" className="hover:text-indigo-300">
              Products
            </a>
            <a href="#" className="hover:text-indigo-300">
              About Us
            </a>
            <a href="#" className="hover:text-indigo-300">
              Careers
            </a>
            <a href="#" className="hover:text-indigo-300">
              Community
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
