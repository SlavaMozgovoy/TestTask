import React from 'react';
import classes from './NavLink.module.css';
import { Outlet, Link } from 'react-router-dom';

export default function NavLink({children, href, ...props}) {
  return (
    <li className = {classes.link}>
        <Link
            className = {classes.link}
            to={href}
        >
            {children}
        </Link>
    </li>
  )
}
