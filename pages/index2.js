import Head from 'next/head';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = ({ ProductList }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Featured ProductList={ProductList} />
        <ProductCard product={ProductList} />
        <Footer />
      </div>
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/prod');
  return {
    props: {
      ProductList: res.data,
    },
  };
};
