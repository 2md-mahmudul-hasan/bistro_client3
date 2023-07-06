
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../useCart/UseCart';
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

const MyCart = () => {
  const [cart, refetch] = UseCart()
  const handleDelete = (item) => {
    Swal.fire({
      title: 'Do you want to delete the cart?',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire(
                'deleted successful'
              )
            }
          })
      }
    })
  }

  console.log(cart)
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
  console.log(totalPrice)
  return (
    <div className='w-full'>
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
                <td><button onClick={() => handleDelete(row)} className='btn btn-sm'><FaTrashAlt /></button></td>
              </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyCart;