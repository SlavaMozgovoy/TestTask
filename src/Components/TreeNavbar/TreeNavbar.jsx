import React from 'react'
import LinkNode from '../LinkNode/LinkNode'

import classes from "./TreeNavbar.module.css";

export default function TreeNavbar({nodes}) {
  return (
    <nav className={classes.navbar}>
        {nodes.map(node => 
            <LinkNode node={node} key={node.id}></LinkNode>
        )}
    </nav>
  )
}
