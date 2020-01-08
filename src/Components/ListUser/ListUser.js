/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from "react";
import "./ListUser.css";

import { listMonth } from "../Months/listMonth";
import TableUsers from '../TableUsers/TableUsers'
import ListMonth from '..//ListMonth/ListMonth'



export default function ListUser(props) {
  const [sortBy, setSortBy] = useState(0);

  const { users } = props;

  const memoizedListUser = useMemo(
    () =>
      users
        ? users.filter(user => new Date(user.dob).getMonth() === sortBy)
        : null,
    [sortBy, users]
  );

  const memoizedListMonth = useMemo(
    () =>
      users
        ? listMonth.map(month => {
            return {
              ...month,
              setQuantityUsers: users.filter(
                user => new Date(user.dob).getMonth() === month.numeral
              )
            };
          })
        : null,
    [users]
  );

  if (!users) return <p>Loading...</p>;
  return (
    <>
      <ListMonth listMonth={memoizedListMonth} setSortBy={setSortBy}/>
      <TableUsers users={memoizedListUser} /> 
    </>
  );
}
