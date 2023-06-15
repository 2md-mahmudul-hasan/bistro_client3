
import Cover from '../../Home/Shared/Cover/Cover';
import coverImg from '../../../assets/shop/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../useMenu/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const [menu] = useMenu()

  console.log(category)
  const salad = menu.filter(items => items.category === 'salad')
  const pizza = menu.filter(items => items.category === 'pizza')
  const soup = menu.filter(items => items.category === 'soup')
  const dessert = menu.filter(items => items.category === 'dessert')
  const drinks = menu.filter(items => items.category === 'drinks')
  const offered = menu.filter(items => items.category === 'offered')








  return (
    <div>
      <Helmet>
        <title>bistroo-boss: order</title>
      </Helmet>
      <Cover img={coverImg} title={"order now"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>

        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div >
  );
};

export default Order;