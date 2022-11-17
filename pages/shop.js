import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 py-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/prod');
  return {
    props: {
      products: res.data,
    },
  };
};
