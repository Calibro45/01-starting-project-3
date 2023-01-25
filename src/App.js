import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const saveNewUser = (eneteredUser) => {
    const user = {
      ...eneteredUser,
      id: Math.random().toString()
    };

    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        user
      ]
    });
  };

  return (
    <>
      <AddUser onSaveUser={saveNewUser}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
