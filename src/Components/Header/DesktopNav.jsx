import React from "react";
import { Link } from "react-router";

const DesktopNav = ({ menuItems }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6  lg:px-12">
      <a href="/">
        <img
          src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2020/03/logo-1-255x61.png"
          alt="logo"
        />
      </a>
      <ul className="flex gap-7">
        {menuItems.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize">
              {menu}
            </Link>
          </li>
        ))}
      </ul>

      {/*Log in and sign up*/}

      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="px-2 py-4 rounded">Log In</button>
          <button className="px-2 py-4 rounded">Sign Up</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
