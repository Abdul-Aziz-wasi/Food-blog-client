import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";

const MobileNav = ({ menuItems, onClose, hide, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6  lg:px-12">
      <a href="/">
        <img
          src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2020/03/logo-1-255x61.png"
          alt="logo"
        />
      </a>
      <button onClick={onOpen} className="">
        <FaBarsStaggered className="w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed top-0 flex justify-center items-center z-50 ${hide}`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <RxCross1 className="w-7 h-7" />
        </button>
        <div>
          <ul className="flex flex-col gap-5">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link to={menu} className="font-medium capitalize text-2xl">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="px-2 py-4 rounded border btn">Log In</button>
              <button className="px-2 py-4 rounded border btn">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
