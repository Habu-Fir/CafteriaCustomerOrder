import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-200">
      <div className="xl:container xl:max-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none  w-96 order-2 space-x-4 sm:order-1 flex justify-center py-2 sm:py-0">
          <Image src={'/img/callbutton.png'} width={50} height={32}></Image>
          <div>
            <div className="text font-bold">ORDER NOW!</div>
            <div className="text-xl font-bold"> 0933839517</div>
          </div>
        </div>
        <div className="shrink w-20 sm:order-2">HomePage</div>
        <div className="shrink w-20 sm:order-2">Products</div>
        <div className="shrink w-20 sm:order-2">Menu</div>
        <div className="shrink w-20 sm:order-2">Events</div>
        <div className="shrink w-20 sm:order-2">Blog</div>
        <div className="shrink w-20 sm:order-2">Contact</div>
        <div className=" shrink w-20 sm:order-2 items-end">
          <Image src={'/img/cart.png'} alt="Cart" width={30} height={30} />
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
