import Cover from "../../Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-4 mt-16">
        {
          items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>

  );
};

export default MenuCategory;