import dbConnect from '../../../util/mongo';

import Product from '../../../models/product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  if (method === 'POST') {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }
  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'PUT') {
    try {
      const Products = await Product.find();
      res.status(200).json(Products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
    try {
      const Products = await Product.find();
      res.status(200).json(Products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
