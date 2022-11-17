import dbConnect from '../../../util/mongo';

import Product from '../../../models/product';

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === 'GET') {
    try {
      const Products = await Product.find();
      console.log(Products);
      res.json(Products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'POST') {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
