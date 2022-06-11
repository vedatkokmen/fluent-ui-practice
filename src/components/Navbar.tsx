import React, { useState } from "react";
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
  {
    key: "counter",
    content: "Counter",
  },
];

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Menu
      aria-label="Navbar"
      className="navbar"
      activeIndex={activeIndex}
      items={items.map((item, index) => ({
        ...item,
        content: <Link to={item.key}>{item.content}</Link>,
        onClick: () => {
          setActiveIndex(index);
          console.log(activeIndex);
        },
      }))}
    ></Menu>
  );
}

export default Navbar;
