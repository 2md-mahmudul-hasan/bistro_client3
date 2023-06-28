import { useContext } from "react";
import AuthProviders, { authContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const OrderFoodCard = ({ items }) => {
  const { name, recipe, image, price, category, _id } = items;
  const { user } = useContext(authContext)
  const location = useLocation()
  const navigate = useNavigate()
  const handleAddToCart = (items) => {
    if (user) {
      const orderItem = { menuItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire(
              'Cart added',
              'thank you'
            )
          }

        })
    }
    else {
      navigate('/login', { state: { from: location } })
    }
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute top-0 right-3 text-yellow-600">{price}</p>
        <div className="card-body">
          <b>{category}</b>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">

            <button onClick={() => handleAddToCart(items)} className="btn mt-8 mx-auto text-white btn-outline border-0 border-b-4"> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;