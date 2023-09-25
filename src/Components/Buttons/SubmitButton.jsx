import React from 'react'

import classes from "./SubmitButton.module.css"

export default function SubmitButton({children, ...props}) {
  return (
    <button {...props} className={classes.btn}>{children}</button>
  )
}
