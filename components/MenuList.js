import React from 'react';
import MenuCard from './MenuCard';

const MenuList = ({ ProductList }) => {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h2 className="text-4xl py-12 font-bold text-center italic">
        List of foods that are super healthy !
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14  ">
        {ProductList.map((sandwich) => (
          <MenuCard key={sandwich._id} sandwich={sandwich} />
        ))}
      </div>
    </section>
  );
};

export default MenuList;
