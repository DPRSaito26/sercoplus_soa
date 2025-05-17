import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  function getUsers() {
    axios.get('http://localhost:8060/api/users/').then(function (response) {
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8060/api/user/${id}/delete`).then(function () {
      getUsers();
    });
  };

  return (
    <main class="flex-shrink-0">
        <div class="container">
            <h3 class="my-3" id="titulo">List User</h3>
        <table class="table table-hover table-bordered my-3" aria-describedby="titulo">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Actions</th>
                    </tr>
        </thead>

        <tbody>
            {users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }} class="btn btn-warning btn-sm me-2">Edit</Link>
                <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" 
                data-bs-target="#eliminaModal" data-bs-id="1"  onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
              </tr>
              )}
               </tbody>
            </table>
        </div>
    </main>
  );
}