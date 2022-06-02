import React from "react";
import { Menu } from "@fluentui/react-northstar";
import { Link } from "react-router-dom";

const items = [
  {
    key: "/",
    content: "Home",
  },
  {
    key: "color-flipper",
    content: "Color Flipper",
  },
  {
    key: "reviews",
    content: "Reviews",
  },
];

function Navbar() {
  return (
    <Menu
      aria-label="Navbar"
      className="navbar"
      items={items.map((item) => ({
        ...item,
        content: <Link to={item.key}>{item.content}</Link>,
      }))}
    ></Menu>
  );
}

export default Navbar;
