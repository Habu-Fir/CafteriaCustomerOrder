import dbConnect from '../../../util/mongo';

import Products from '../../../models/prducts';

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === 'POST') {
    try {
      const product = await Products.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (method === 'GET') {
    try {
      const product = await Products.find();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
