import React from 'react'


import classes from "./TableHead.module.css";

export default function TableHead() {
  return (
    <tr className={classes.tableHead}>
        <th><input type="checkbox" /></th>
        <th></th>
        <th>Название</th>
        <th>Тип</th>
        <th>Расположение</th>
        <th>Орг.единица</th>
        <th>Инв.номер</th>
        <th>Теги</th>
        <th>Дата создания</th>
        <th>Дата обновления</th>
        <th>Дата аудита</th>
        <th></th>
    </tr>
  )
}
