import { FaCartPlus, FaBeer, FaCalendar, FaUser, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className="drawer lg:drawer-open bg-[#fff]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#ffffff]">
        <label htmlFor="my-drawer-2" ></label>
        <ul className="menu p-4 w-80 h-full bg-[#d67f80] ">
          {/* Sidebar content here */}
          <li><NavLink to="/dashboard/myCart"><FaCartPlus style={iconStyles} />my cart</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaBeer style={iconStyles} /> payment</NavLink></li>
          <li><NavLink to="/dashboard/reservation"><FaCalendar style={iconStyles} /> reservation</NavLink></li>
          <li><NavLink to="/dashboard/user"><FaUser style={iconStyles} /> User</NavLink></li>
          <li><NavLink to="/dashboard/home"><FaHome style={iconStyles} /> Home</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;