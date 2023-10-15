import React, { useEffect, useState } from 'react';

export default function Code(){
        const [users, setUsers] = useState([]);
      
        useEffect(() => {
          fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
              if (data && Array.isArray(data.users)) {
                setUsers(data.users);
              } else {
                console.error('Invalid data format or no "users" property found.');
              }
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            })
        }, [])
        return (
            <div className="container">
              <h1>Dummy Data</h1>
              <div className="table-responsive">
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Sno</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Username</th>
                      <th scope="col">Domain</th>
                      <th scope="col">IP</th>
                      <th scope="col">University</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        );
}