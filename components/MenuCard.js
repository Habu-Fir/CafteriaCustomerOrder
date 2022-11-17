import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuCard({ sandwich }) {
  return (
    <Card className="w-50">
      <CardHeader color="blue" className="relative h-27">
        <Link href={`/category/${sandwich.category}`}>
          <Image
            width={400}
            height={400}
            src={sandwich.img}
            alt="img-blur-shadow"
            // className="h-full w-full cursor-pointer"
          />
        </Link>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-1">
          {sandwich.category}
        </Typography>
        <Typography>{sandwich.product}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{sandwich.price} Birr</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Addis Ababa, Ethiopia
        </Typography>
      </CardFooter>
    </Card>
  );
}
