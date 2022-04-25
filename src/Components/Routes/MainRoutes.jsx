import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { Navbar } from "../pages/Navbar";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
// import { Logout } from "../pages/Logout";

// import { SingleBook } from "../pages/SingleBook";
// import { RequiredAuth } from "./RequiredAuth";
// import { EditBookData } from "../pages/EditBookData";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       {/* /books/* route need to be protected */}
       <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About /> } />
        <Route exact path="/books" element={<Books /> } />
        <Route exact path="/login" element={<Login /> } />
      </Routes>
    </>
  );
};
export default Mainroutes;
