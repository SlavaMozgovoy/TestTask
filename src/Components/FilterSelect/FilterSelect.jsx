import React from 'react'

import classes from "./FIlterSelect.module.css"

export default function FilterSelect({options, defaultValue, value, onChange, label}) {
  return (
    <div className={classes.select}>
        <label>{label}</label>
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="">{defaultValue}</option>
            {options.map(option =>
                <option 
                    value={option.value}
                    key={option.value}
                >
                    {option.name}
                </option>    
            )}
        </select>
    </div>
    
  )
}
