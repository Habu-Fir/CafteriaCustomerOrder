import Image from 'next/image';

const ItemList = ({ res }) => {
  return (
    <div className="container flex flex-col-reverse items-center px-0 mx-auto mt-5 space-y-0 md:space-y-0 md:flex-row">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="mx-w-md text-3xl font-bold text-center md:text-left md:text-4xl"></h1>
        <p className="mx-w-sm text-center text-brightRed md:text-left text-xl font-bold italic">
          Offer 5% off to the people who have a ticket to a local Game Zone, or
          <em className="text-lg text-in"> 5 birr</em> of any purchase before a
          concert that's down the street.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src={res.img}
          width={400}
          height={400}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default ItemList;
