/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from "react";
import "./ListUser.css";
import cn from "classnames";

import { listMonth } from "../listMonth/listMonth";

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

  console.log('render');

  if (!users) return <p>Loading...</p>;
  return (
    <>
      <ul className="rounded">
        {memoizedListMonth.map(month => (
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
      <table className="table table-hover">
        <thead className="table-inverse">
          <tr>
            <td>#</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>dob</td>
          </tr>
        </thead>
        <tbody>
          {memoizedListUser.map((user, index) => {
            return (
              <tr key={user.id + user.name}>
                <th scope="row">{index}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
