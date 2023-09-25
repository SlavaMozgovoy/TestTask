import React from 'react'


import classes from "./TableEntry.module.css";

export default function TableEntry({entry, ...props}) {


  return (
    <tr>
      <td><input type="checkbox"/></td>
      <td> <div className={`${classes.status} ${entry.pcStatus ? classes.active : ""}`}></div></td>
      <td>{entry.title}</td>
      <td>{entry.type}</td>
      <td>{entry.location}</td>
      <td>{entry.orgEntity}</td>
      <td>{entry.invNumber}</td>
      <td>{entry.tags}</td>
      <td>{entry.createTime}</td>
      <td>{entry.updateTime}</td>
      <td>{entry.auditTime}</td>
      <td className={classes.icon}>I</td>
    </tr>
  )
}
