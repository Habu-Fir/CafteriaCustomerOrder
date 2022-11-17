import React from 'react';
import MenuList from '../../components/MenuList';
import axios from 'axios';

const index = ({ ProductList }) => {
  return (
    <div>
      <MenuList ProductList={ProductList} />
    </div>
  );
};

export default index;
export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/prod');
  return {
    props: {
      ProductList: res.data,
    },
  };
};
