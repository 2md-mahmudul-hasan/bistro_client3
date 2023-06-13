import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu.jpg'
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistroo-boss || menu</title>

      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;