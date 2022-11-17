import React from 'react';
import { useState } from 'react';

const OrderDatail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center bg-blue-gray-500 opacity-100">
      <div className="w-1/3  bg-white rounded-2xl  p-2 flex-col items-center justify-center ">
        <h1 className="font-bold text-red-900 mb-10">
          You will pay
          <em className="text-blue-gray-900 underline"> {total} birr </em>
          after delivery
        </h1>
        <div className="flex-col flex w-full mb-4">
          <label className="mb-3 text-left">Name Surename </label>
          <input
            className="h-10 border border-solid border-gray-300"
            placeholder="Ruel Assefa"
            type={'text'}
            onChange={(e) => setCustomer(e.target.value)}
          ></input>
        </div>
        <div className="flex-col flex w-full mb-4">
          <label className="mb-3 text-left">Phone Number</label>
          <input
            type="text"
            placeholder="+251923..."
            className="mb-3 border border-solid border-gray-300"
          />
        </div>
        <div className="flex-col flex w-full mb-4">
          <label className="mb-3 text-left">Address</label>
          <textarea
            rows={5}
            placeholder="Gured Shola"
            type="text"
            className="mb-3 border border-solid border-gray-300"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDatail;
