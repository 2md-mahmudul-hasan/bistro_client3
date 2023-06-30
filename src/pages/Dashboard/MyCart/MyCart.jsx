import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../useCart/UseCart';

const MyCart = () => {
  const [cart] = UseCart()
  console.log(cart)
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
  console.log(totalPrice)
  return (
    <div>
      <Helmet>
        <title>Bistro-boss || mycart</title>
      </Helmet>
      <h2>my cart , totaal cart{cart.length}</h2>
      <h2>my cart , totaal {totalPrice}</h2>
    </div>
  );
};

export default MyCart;