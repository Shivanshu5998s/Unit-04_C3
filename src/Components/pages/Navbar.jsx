// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav
           
      >
        {/* keep all the NavLinks here */}
        <button className="home"><NavLink to={"/"}>Home</NavLink></button>
        <button className="about"><NavLink to={"/about"}>About</NavLink></button>
        <button className="books"><NavLink to={"/books"}>Books</NavLink></button>
        <button className="login"><NavLink to={"/login"}>Login</NavLink></button>

      </nav>
    </>
  );
};
