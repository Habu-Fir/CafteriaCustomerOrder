// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { useDispatch, useSelector } from 'react-redux';
// const Cart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);

//   return (
//     <>
//       <Header />

//       <div className="container flex mx-auto gap-2 mt-1">
//         <div className="flex justify-start py-1 w-4/5 rounded">
//           <div className="bg-white px-10 py-10 w-full ">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">
//                 Customer order and status
//               </h1>
//               <h2 className="font-semibold text-2xl">3 Items</h2>
//             </div>
//             <div className="flex mt-10 mb-5">
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6">
//                 Status
//               </h3>
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6">
//                 Order ID
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/6 ">
//                 Customer
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/6 ">
//                 Address
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/6">
//                 Price
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/6">
//                 Quantity
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/6">
//                 Total
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div id="summary" className="w-1/4 px-8 py-10 bg-blue-gray-100 rounded">
//           <h1 className="font-semibold text-2xl border-b pb-8">
//             Order Summary
//           </h1>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Items 3</span>
//             <span className="font-semibold text-sm">590$</span>
//           </div>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Discount</span>
//             <span className="font-semibold text-sm">0$</span>
//           </div>

//           <div className="border-t mt-8">
//             <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//               <span>Total cost</span>
//               <span>{cart.total}</span>
//             </div>
//             <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
//               PAID
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;
