import React, { useState } from 'react';
import Cover from '../../Home/Shared/Cover/Cover';
import coverImg from '../../../assets/shop/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../useMenu/useMenu';
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const [menu] = useMenu()
  const desserts = menu.filter(papularItem => papularItem.category === 'dessert')
  const salad = menu.filter(papularItem => papularItem.category === 'salad')
  const soup = menu.filter(papularItem => papularItem.category === 'soup')
  const offered = menu.filter(papularItem => papularItem.category === 'offered')
  const pizza = menu.filter(papularItem => papularItem.category === 'pizza')







  return (
    <div>
      <Cover img={coverImg} title={"order now"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;