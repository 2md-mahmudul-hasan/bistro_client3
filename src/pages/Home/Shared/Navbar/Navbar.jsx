
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../../Providers/AuthProviders';
import { FaCartArrowDown } from 'react-icons/fa';
import UseCart from '../../../../useCart/UseCart';

const Navbar = () => {
  const [cart] = UseCart()
  const { user, logOut } = useContext(authContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(err => {
        console.log(err.message)
      })
  }
  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/secret"> this is secret</Link></li>
    <li><Link to="/order/salad">Order</Link></li>
    <li><Link to="/dashboard/myCart"><button className="btn">
      < FaCartArrowDown />
      <div className="badge badge-secondary">{cart?.length || 0}</div>
    </button></Link></li>

  </>
  return (
    <div className="navbar bg-base-100 fixed z-10 max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"> Bistroo - Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <><button onClick={handleLogOut} className='btn btn-square'>Logout</button></> : <><li><Link to="/login">Login</Link></li></>
        }
      </div>
    </div>
  );
};

export default Navbar;