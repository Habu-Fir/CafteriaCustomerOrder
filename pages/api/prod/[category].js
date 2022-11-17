import dbConnect from '../../../util/mongo';
import Products from '../../../models/prducts';

export async function getProductsByCategory(category) {
  dbConnect();
  const Prod = (await Products.find()).filter(
    (product) => product.category === category
  );

  return Prod;
}

export default async function handler(req, res) {
  await dbConnect();
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = await getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
