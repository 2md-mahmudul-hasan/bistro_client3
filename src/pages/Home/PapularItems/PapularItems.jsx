

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../../useMenu/useMenu';

const PapularItems = () => {
  const [menu] = useMenu()
  const popularItems = menu.filter(papularItem => papularItem.category === 'popular')


  return (
    <div>
      <section>
        <SectionTitle heading="From Our Menu" subHeading=" papular items "></SectionTitle>
      </section>
      <div className="grid grid-cols-2 gap-4">
        {
          popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PapularItems;