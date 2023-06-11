
import { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect } from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PapularItems = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(papularItem => papularItem.category === 'popular')
        setMenu(popularItems)
      }
      )
  }, [])
  return (
    <div>
      <section>
        <SectionTitle heading="From Our Menu" subHeading=" papular items "></SectionTitle>
      </section>
      <div className="grid grid-cols-2 gap-4">
        {
          menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PapularItems;