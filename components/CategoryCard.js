import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ image, name, des }) {
  return (
    <Card className="w-50">
      <CardHeader color="blue">
        <Link href={`/category/${name}`}>
          <Image
            width={300}
            height={300}
            src={image}
            alt="img-blur-shadow"
            className="h-full w-full cursor-pointer"
          />
        </Link>
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h6"
          className="font-serif text-lg text-gray-800 text-center"
        >
          {name}
        </Typography>
        {/* <Typography>You wil have the Best food</Typography> */}
      </CardBody>
      <CardFooter divider className="items-center block justify-between py-3">
        <Typography
          variant="small"
          className="font-serif text-lg text-gray-800 text-center align-baseline"
        >
          {des}
        </Typography>
        <Typography variant="small" color="gray">
          <a
            href={`/category/${name}`}
            className="hidden cursor-pointer md:block bg-yellow-700 hover:bg-brightRedLight p-1 mt-2  px-4 pt-1 self-baseline rounded text-white "
          >
            ORDER NOW
          </a>
        </Typography>
      </CardFooter>
    </Card>
  );
}
