import React from 'react'

import classes from "./DefaultButton.module.css"

export default function DefaultButton({children, ...props}) {
  return (
    <button {...props} className={classes.btn}>{children}</button>
  )
}
