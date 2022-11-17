import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: false,
      maxlength: 30,
    },
    product: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Products ||
  mongoose.model('Products', ProductsSchema);
