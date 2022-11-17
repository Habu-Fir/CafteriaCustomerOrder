import Products from '../../../models/prducts';
import dbConnect from '../../../util/mongo';

export default async function getProducts() {
  dbConnect();
  const products = await Products.find({});
  return products;
}
