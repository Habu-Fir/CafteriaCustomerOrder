import React from 'react';

const AddButton = ({ setClose }) => {
  return (
    <div className="flex justify-center md:justify-start">
      <a
        href="#"
        className="bg-brightRed hover:bg-brightRedLight m-auto p-3  px-6 pt-1 self-baseline rounded-full text-white "
        onClick={() => setClose(false)}
      >
        Add new Food
      </a>
    </div>
  );
};

export default AddButton;
