import dbConnect from '../../../util/mongo';

import Orders from '../../../models/orders';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();
  if (method === 'GET') {
    try {
      const orders = await Orders.findById(id);
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'PUT') {
    try {
      const order = await Orders.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
  }
}
