import React, { useState } from "react";
import photo from "../../assets/heart.png";
import photo2 from "../../assets/poert1.png";
import photo3 from "../../assets/sponser-8.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ mode, changeMode }) {
  const [open, setOpen] = useState(false);
  // function changeOpen() {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }
  return (
    <>
      <nav className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow py-4 px-4 sm:px-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center ">
            <h2>
              <Link to={"/"}>TailwindCSS</Link>
            </h2>
            <div className="list order-first lg:order-none">
              <ul className="lg:flex gap-3 hidden">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"}>Gallery</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>Products</NavLink>
                </li>
              </ul>
              <div
                className="menuBtn lg:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <img className="w-10" src={photo2} />
              </div>
            </div>

            <div className=" cursor-pointer" onClick={()=>changeMode()}>
              {mode == "dark" ? (
                <img className="w-10 lightMode" src={photo3} />
              ) : (
                <img className="w-10 darkMode" src={photo} />
              )}
            </div>
          </div>

          {open ? (
            <ul className=" space-y-3 mt-2 lg:hidden">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"}>Gallery</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}



// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components1/Layout/Layout.jsx";
// import Home from "./Components1/Home/Home.jsx";
// import About from "./Components1/About/About.jsx";
// import Gallery from "./Components1/Gallery/Gallery.jsx";
// import Products from "./Components1/Products/Products.jsx";
// import NotFound from "./Components1/NotFound/NotFound.jsx";

// const routers=createBrowserRouter([
//   { path: "",element:<Layout/>,children:[
//     {index:true,element:<Home/> },
//     {path:"about",element:<About/> },
//     {path:"gallery",element:<Gallery/> },
//     {path:"products",element:<Products/> },
//     {path:"*",element:<NotFound/> },

//   ]

//   }]);

// function App() {
//   return (
//     <>
//          <RouterProvider router={routers}></RouterProvider>
//     </>
//   );
// }

// export default App;
// // npx generate-react-cli component Box
// // npx generate-react-cli component Box --withTest=false
// // npx generate-react-cli component Box --withTest=true

// export default App;
