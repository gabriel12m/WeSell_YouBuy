import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiFillShopping />,
  },
  {
    title: "Categories",
    path: "/categories",
    icon: <AiIcons.AiFillShopping />,
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiFillInfoCircle />,
  },
  {
    title: "Profile",
    icon: <BsIcons.BsFillPersonFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "My Profile",
        path: "/profile",
        icon: <IoIcons.IoIosPerson />,
      },
      {
        title: "Edit My Profile",
        path: "/edit_profile",
        icon: <FaIcons.FaUserEdit />,
      },
      {
        title: "See My Shop History",
        path: "/shop_history",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Shopping Cart",
    path: "/shopping_cart",
    icon: <FaIcons.FaShoppingCart />,
  },
];
