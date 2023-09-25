import React from 'react'
import TreeNavbar from '../TreeNavbar/TreeNavbar'

import classes from "./Sidebar.module.css";

export default function Sidebar({nodes}) {
  return (
    <div className={classes.sidebar}>
        <div className={classes.logoGroup}>
            <h1>SYSTEM</h1>
            <p>Powered by U-System</p>
        </div>
        <TreeNavbar nodes={nodes}/>
    </div>
  )
}
