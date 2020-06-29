import React from "react";
import {Link} from "react-router-dom";
import "./header.styling.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header = () => (
  <div className='header'>
    <Link to='/'></Link>
  </div>
);

export default Header;
