import React, { useState } from "react";
import Lilnk from "./lilnk";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((route) => <Lilnk key={route.id} route={route}></Lilnk>);

  return (
    <nav className="flex justify-between mx-10 mt-5 ">
      <span className="flex gap-6" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden" size={40}></X>
        ) : (
          <Menu className="md:hidden" size={40}></Menu>
        )}
           <ul className={`md:hidden flex flex-col ml-6  rounded-2xl font-bold bg-amber-300 p-6 duration-1000
             absolute
            ${open? 'top-8':'-top-60 '} `}>
            {
            links
            }
            </ul>

        <h1 className="ml-4">My Navbar</h1>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      <button>Sign in</button>
    </nav>
    // <nav>
    //   <ul className="flex">
    //     {navLinks.map((route) => (
    //       <li className="ml-10">
    //          <a href={route.path}>{route.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    // <div>
    //   <ul className="flex">
    //     <li className="ml-10">
    //       <a href="/">Home</a>
    //     </li>
    //     <li className="ml-10">
    //       <a href="/about">About</a>
    //     </li>
    //     <li className="ml-10">
    //       <a href="/blog">Blog</a>
    //     </li>
    //     <li className="ml-10">
    //       <a href="/contact">Contact</a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
