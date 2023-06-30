
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../useCart/UseCart';
import { FaTrashAlt } from 'react-icons/fa'


const MyCart = () => {
  const [cart] = UseCart()
  console.log(cart)
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
  console.log(totalPrice)
  return (
    <div>
      <Helmet>
        <title> Bistro-boss || mycart </title>
      </Helmet>
      <div className="cart-heading flex uppercase font-semibold justify-around">
        <p>Total carts{cart.length}</p>
        <p>Total price{totalPrice}</p>
        <button className='btn btn-warning btn-sm'>pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((row, index) => <tr key={row._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    {index + 1}
                  </div>
                </td>
                <td>


                  <div className="mask mask-squircle w-12 h-12">
                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                  </div>



                </td>
                <td>
                  {row.name}
                </td>
                <td>
                  {row.price}
                </td>
                <td><button className='btn btn-sm'><FaTrashAlt /></button></td>
              </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyCart;