import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

const Index = ({ orders, products }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const statusArray = ['preparing', 'on the way', 'delivered'];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete('http://localhost:3000/api/prod/id/' + id);
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg flex space-x-4 pt-10">
      <div className="flex-col">
        <h1 className="text-center pb-5 font-bold text-pink-800 text-3xl">
          PRODUCTS
        </h1>

        <table class="w-1/3 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Image
              </th>
              <th scope="col" class="py-3 px-6">
                Id
              </th>
              <th scope="col" class="py-3 px-6">
                Title
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {productList.map((product) => (
            <tbody key={product.id}>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={product.img}
                    width={150}
                    height={150}
                    objectFit="cover"
                  />
                </td>
                <td class="py-4 px-6">{product._id.slice(0, 3)}..</td>
                <td class="py-4 px-6">{product.product}</td>
                <td class="py-4 px-6">{product.price}</td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    class=" dark:text-blue-500 hover:underline mr-2 text-base font-bold text-light-green-800"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class=" dark:text-blue-500 hover:underline mr-2 text-base font-bold text-red-800"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex-col">
        <h1 className="text-center pb-5 font-bold text-pink-800 text-3xl">
          ORDERS
        </h1>
        <table class="w-1/3 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                Customer
              </th>
              <th scope="col" class="py-3 px-6">
                Total
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {orderList.map((order) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order._id.slice(0, 3)}...
                </th>
                <td class="py-4 px-6">{order.customer}</td>
                <td class="py-4 px-6">{order.total}</td>
                <td>{statusArray[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: 'admin/login',
        permanent: false,
      },
    };
  }
  const productRes = await axios.get('http://localhost:3000/api/prod');
  const orderRes = await axios.get('http://localhost:3000/api/orders');
  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};
export default Index;
