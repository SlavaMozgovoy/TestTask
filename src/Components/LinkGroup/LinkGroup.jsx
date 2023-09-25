import React from 'react'
import NavLink from '../NavLink/NavLink'

import classes from './LinkGroup.module.css';

export default function LinkGroup({links, isActive}) {
  return (
    <ul 
        className={`${classes.group} ${isActive ? classes.active : ""}`} 
    >
        {links.map(link => 
            <NavLink href={link.href} key={link.id} > — {link.text}</NavLink>
        )}
    </ul>
  )
}
