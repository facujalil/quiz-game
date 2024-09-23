import React from "react";
import "../css/NavItem.css";
import { NavLink } from "react-router-dom";

function NavItem({ locked, lockedMessage, to, className, children }) {
  return locked ? (
    <div title={lockedMessage} className={`${className} locked`}>
      {children}
    </div>
  ) : (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}

export default NavItem;
