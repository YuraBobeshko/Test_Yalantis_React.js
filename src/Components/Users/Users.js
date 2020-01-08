import React, { useState, useEffect } from "react";
import ListUser from "../ListUser/ListUser";
import loadUsers from "../../REST api/loadUser";

export default function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    loadUsers().then(({ data }) => setUsers(data));
  }, []);

  return <ListUser users={users} />;
}
