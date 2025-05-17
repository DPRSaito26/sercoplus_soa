import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "../components/CreateUser";
import EditUser from "../components/EditUser";
import ListUser from "../components/ListUser";

function Crud() {
  return (
    <div className="App">
      <br />
      <BrowserRouter>
        <nav>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <Link to="/" class="btn btn-success">
                List Users
            </Link>
            <Link to="user/create" class="btn btn-warning">
                Create User
            </Link>
          </div>
        </nav>

        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default Crud;
