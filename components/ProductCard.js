import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../ReduxToolkit/cart.slice';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <Card className="w-50">
      <CardHeader color="blue" className="relative h-27">
        <Image
          width={400}
          height={400}
          src={product.img}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2">
          {product.product}
        </Typography>
        <Typography>{product.category}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small"> Prices :{product.price} Birr</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </Typography>
      </CardFooter>
    </Card>
  );
}
