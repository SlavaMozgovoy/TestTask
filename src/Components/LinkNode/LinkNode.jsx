import React from 'react'
import LinkGroup from '../LinkGroup/LinkGroup'
import { useState } from "react";

import classes from "./LinkNode.module.css";


export default function LinkNode({node}) {

    const [isActive, setIsActive] = useState(false);

    const switchActive = () => {
        setIsActive(!isActive);
    }

  return (
    <div>
        <div 
            className={classes.linkRow}
            onClick={switchActive}
        >
            <div className={classes.linkTitle}>
                <ion-icon name={node.icon}></ion-icon>
                <h2>{node.title}</h2>
            </div>
            <ion-icon name={`${isActive ? "chevron-up-outline" : "chevron-down-outline"}`}></ion-icon>
        </div>
        <LinkGroup links={node.links} isActive={isActive}></LinkGroup>
    </div>
  )
}
