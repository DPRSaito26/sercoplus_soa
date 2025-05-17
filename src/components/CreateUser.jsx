import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8060/api/user/save', inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    });
  };

  return (
    <main className="flex-shrink-0 d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
      <div className="container">
        <h3 className="my-3 text-center">Create User</h3>
        <form onSubmit={handleSubmit} className="w-25 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" id="name" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input type="text" className="form-control" name="mobile" id="mobile" onChange={handleChange} />
          </div>
          <div className="text">
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </main>
  );
}