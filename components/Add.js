import axios from 'axios';
import React, { useState } from 'react';

export const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const handleCreate = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dvkwcz6ab/image/upload',
        data
      );
      setId(id + 10);
      const { url } = uploadRes.data;
      const newProduct = {
        product,
        price,
        category,
        img: url,
        id,
      };
      console.log(newProduct);
      await axios.post('http://localhost:3000/api/prod', newProduct);
      console.log;
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-screen h-screen bg-blue-gray-600 opacity-90  fixed top-0 z-50 flex items-center justify-center">
      <div className="w-500 bg-white p-12 rounded-3xl flex-col items-center justify-center relative top-3">
        <span
          onClick={() => setClose(true)}
          className="w-8 h-8 bg-black text-white rounded-3xl flex items-center justify-center cursor-pointer absolute top-0 right-0"
        >
          X
        </span>
        <h1 className="justify-center items-center text-lg ml-20">
          Add new food
        </h1>
        <div className="mb-2 flex-col flex">
          <label> Choose an Image</label>
          <input type={'file'} onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div className="mb-2 flex-col flex">
          <label> Category</label>
          <input
            type={'text'}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded"
          ></input>
        </div>
        <div className="mb-2 flex-col flex">
          <label className="form-label inline-block mb-2 text-black">
            {' '}
            Product
          </label>
          <input
            type={'text'}
            onChange={(e) => setProduct(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded"
          ></input>
        </div>
        {/* <div className="mb-2 flex-col flex">
          <label>Description</label>
          <textarea
            type={'text'}
            onChange={(e) => setDes(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded"
          ></textarea>
        </div> */}
        <div className="mb-2 flex-col flex">
          <label> Price</label>
          <input
            type={'number'}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded"
          ></input>
        </div>
        <button
          type="button"
          class="inline-block px-6 py-2 border-2 border-green-500 text-white bg-green-900 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:text-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};
