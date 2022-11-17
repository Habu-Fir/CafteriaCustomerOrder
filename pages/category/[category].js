import ProductCard from '../../components/ProductCard';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const CategoryPage = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <section className="container mx-auto md:px-10 py-10 pt-0">
        <h2 className="text-3xl py-12 font-bold text-center italic">
          what would you like drink?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/prod/${params.category}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
