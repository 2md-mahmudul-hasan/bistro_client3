
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';

const Main = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login')
  console.log(location)
  return (
    <div>
      {
        noHeaderFooter || <Navbar></Navbar>
      }

      <Outlet></Outlet>
      {
        noHeaderFooter || <Footer></Footer>
      }

    </div>
  );
};

export default Main;