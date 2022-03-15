import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navLinksStyle = {
    color: "white",
    textDecoration: "none",
    flexGrow: "1",
  };

  return (
    <div className='nav-bar'>
      <ul>
        <Link style={navLinksStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navLinksStyle} to='/show'>
          <li>Show</li>
        </Link>
        <Link style={navLinksStyle} to='create'>
          <li>Create</li>
        </Link>
        <Link style={navLinksStyle} to='update'>
          <li>Update</li>
        </Link>
        <Link style={navLinksStyle} to='/delete'>
          <li>Delete</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
