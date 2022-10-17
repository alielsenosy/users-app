import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Table from "../Table/Table";
import uuid from "react-uuid";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

  const DeletaData = (e, selectedId) => {
    setData((preveData) => {
      return preveData.filter((el) => el.id !== selectedId);
    });
  };

  const EditUser = (selectedUser) => {
    setData(
      data.map((user) => (user.id === selectedUser.id ? selectedUser : user))
    );
  };

  const setNewUser = (newUser) => {
    setData((currentUser) => [...currentUser, { ...newUser, id: uuid() }]);
  };

  return (
    <Fragment>
      <Table
        setNewUser={setNewUser}
        deletaUser={DeletaData}
        data={data}
        EditUser={EditUser}
      />
    </Fragment>
  );
}

export default Users;
