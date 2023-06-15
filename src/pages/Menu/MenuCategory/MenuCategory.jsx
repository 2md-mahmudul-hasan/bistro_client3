import { Link } from "react-router-dom";
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
      <Link to={`/order/${title}`}><button className="btn mt-8 mx-auto block  bg-red-700 text-white btn-outline border-0 border-b-4"> order now</button></Link>
    </div>

  );
};

export default MenuCategory;