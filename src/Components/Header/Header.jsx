import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [hide, setHide] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "about", "contact"];

  const onOpen = () => {
    setHide("left-0");
  };

  const onClose = () => {
    setHide("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems}></DesktopNav>
      </div>

      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          onClose={onClose}
          hide={hide}
          onOpen={onOpen}
        ></MobileNav>
      </div>
    </>
  );
};

export default Header;
