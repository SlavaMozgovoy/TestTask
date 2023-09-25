import React from 'react'


import classes from "./TopNavbar.module.css"


export default function TopNavbar() {
  return (
    <nav className={classes.navbar}>
        <div className={classes.menu}>
            <span className={classes.settings}><ion-icon name="settings-outline" ></ion-icon></span>
            <div className={classes.profile}>
                <span className={classes.img}>N</span>
                <p>null null</p>
                <span className={classes.dropIcon}><ion-icon name="chevron-down-outline"></ion-icon></span>
            </div>
        </div>

    </nav>
  )
}
