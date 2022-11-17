import ProductCard from '../../components/ProductCard';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const CategoryPage = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <section className="container mx-auto md:px-20 py-10">
        <h2 className="text-4xl py-12 font-bold text-center italic">
          List of {router.query.category} that are super healthy !
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14  ">
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
