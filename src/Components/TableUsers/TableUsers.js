import React from 'react'

export default function TableUsers(props) {
  
  const { users } = props;
  
  return (
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
      {users.map((user, index) => {
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
  )
}
