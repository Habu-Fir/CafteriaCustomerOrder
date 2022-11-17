import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 30,
    },
    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      required: false,
    },
    orderId: {
      type: String,
      required: false,
    },
  },
  { timestamps: false }
);

export default mongoose.models.Orders || mongoose.model('Orders', OrderSchema);
