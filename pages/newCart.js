import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../ReduxToolkit/cart.slice';
import OrderDatail from '../components/OrderDatail';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../ReduxToolkit/cart.slice';
import styles from './CartPage.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CartPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);

      if (res.status === 200) {
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.img} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2 className="uppercase italic font-bold pb-4">
            Grand Total: $ {getTotalPrice()}
          </h2>
          <button
            href={'/OrderDetail'}
            className="inline-block px-6 py-2 border-2 border-green-600 text-white bg-black font-medium text-sm leading-tight uppercase rounded-3xl hover:bg-opacity-5 focus:outline-none"
            onClick={() => setOpen(true)}
          >
            Cash on Delivery
          </button>
        </>
      )}
      <div>
        {open && (
          <OrderDatail total={getTotalPrice()} createOrder={createOrder} />
        )}
      </div>
    </div>
  );
};

export default CartPage;
