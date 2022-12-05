
import React from "react";
const NavbarLinks = ({ links }) => {
  return (
    links &&
    links.map((el) => (
      <li key={el?.title}>
        <a href={el.url} target={el?.target}>
          {el.title}
        </a>
      </li>
    ))
  );
};

const NavbarDrawer = ({links}) => {
  return (
    
    <div className="drawer h-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className=" flex flex-col">
        <div className="w-full navbar bg-base-900 relative ">
          <div className="lg:flex-1 px-2 mx-auto lg:mx-2">Navbar</div>
          <div className="flex-none lg:hidden z-10 absolute right-0">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <NavbarLinks links={links} />
            </ul>
          </div>
        </div>
      </div>
      
        <div className="drawer-side absolute top-0 left-0 w-0 h-screen lg:-z-10">
       
          <label htmlFor="my-drawer-3" className="drawer-overlay fixed top-0 left-0 w-screen h-screen z-10"></label>
          <ul className="menu p-4 w-80 bg-base-100 fixed top-0 left-0 h-screen z-10">
            <div className="flex-none lg:hidden z-10 ">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <NavbarLinks links={links} />
          </ul>
        
      </div>
    </div>
    
  );
};

export default NavbarDrawer;


