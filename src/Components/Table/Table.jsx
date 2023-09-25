import React, { useState } from 'react'
import TableHead from './TableHead'
import TableEntry from './TableEntry';

export default function Table({data}) {


  return (
    <table>
        <TableHead/>
        {data.map(entry =>
            <TableEntry 
                entry={entry}
                key = {entry.id}
            />
        )}
    </table>
  )
}
