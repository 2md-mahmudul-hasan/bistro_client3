
import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soapImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../useMenu/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(papularItem => papularItem.category === 'dessert')
  const salad = menu.filter(papularItem => papularItem.category === 'salad')
  const soup = menu.filter(papularItem => papularItem.category === 'soup')
  const offered = menu.filter(papularItem => papularItem.category === 'offered')
  const pizza = menu.filter(papularItem => papularItem.category === 'pizza')
  return (
    <div>
      <Helmet>
        <title>Bistroo-boss || menu</title>

      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="our menu"></Cover>
      {/* offered */}
      <SectionTitle heading='Todays Offer' subHeading='Do not offered'></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory title="Dessert" img={dessertImg} items={desserts}></MenuCategory>
      {/* Pizza */}
      <MenuCategory title="Pizza" img={pizzaImg} items={pizza}></MenuCategory>
      {/* salad */}
      <MenuCategory title="Salad" img={saladImg} items={salad}></MenuCategory>
      {/* soup */}
      <MenuCategory title="Soup" img={soapImg} items={soup}></MenuCategory>
    </div>

  );
};

export default Menu;