/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cn from "classnames";

export default function ListMonth(props) {
  
  const { listMonth, setSortBy } = props;

  return (
    <ul className="rounded">
    {listMonth.map(month => (
      <li key={month.numeral} onMouseOver={() => setSortBy(month.numeral)}>
        <a
          className={cn({
            gray: month.setQuantityUsers.length <= 3,
            blue:
              month.setQuantityUsers.length > 3 &&
              month.setQuantityUsers.length <= 6,
            green:
              month.setQuantityUsers.length >= 7 &&
              month.setQuantityUsers.length <= 10,
            red: month.setQuantityUsers.length >= 11
          })}
          href="#"
        >
          {month.name}
        </a>
      </li>
    ))}
  </ul>
  )
}
