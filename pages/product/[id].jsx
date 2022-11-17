import Image from 'next/image';
import React, { useState } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
const Product = ({ Product }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const handleClick = () => {
    dispatch(addProduct({ ...Product, price }));
  };
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2">
        <div className="Image m-auto">
          <div className="flex-col">
            <Image
              src={Product.img}
              width={400}
              height={400}
              className="bg-blue-gray-400 rounded-full"
            />
          </div>
        </div>
        <div className="detail flex justify-center flex-col">
          <h1 className="text-3xl font-bold">{Product.name}</h1>
          <span className="font-bold text-red-500 text-2xl underline p-1">
            {'Price:'} {Product.prices[price]} {'Birr'}
          </span>
          <p className="text-xl pr-8">{Product.des}</p>
          <h2 className="italic text-2xl font-bold text-red-500 pt-4">
            Choose type you want?
          </h2>
          <div className="flex gap-20 p-3">
            <div className="flex-col ">
              <div>
                <Image
                  src={Product.img}
                  width={100}
                  height={100}
                  className="rounded-full cursor-pointer"
                  onClick={() => setPrice(0)}
                ></Image>
              </div>
              <div>
                <button className="px-3 py-1 text-white rounded-full bg-brightRed justify-start hover:bg-brightRedLight focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="flex-col ">
              <div>
                <Image
                  src={Product.img}
                  width={100}
                  height={100}
                  className="rounded-full cursor-pointer"
                  onClick={() => setPrice(1)}
                ></Image>
              </div>{' '}
              <div>
                <button
                  className="px-3 py-1 text-white rounded-full bg-brightRed justify-start hover:bg-brightRedLight focus:outline-none"
                  onClick={handleClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="flex-col ">
              <div>
                <Image
                  src={Product.img}
                  width={100}
                  height={100}
                  className="rounded-full crsor-pointer"
                  onClick={() => setPrice(2)}
                ></Image>
              </div>{' '}
              <div>
                <button className="px-3 py-1 text-white rounded-full bg-brightRed justify-start hover:bg-brightRedLight focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      Product: res.data,
    },
  };
};

export default Product;
