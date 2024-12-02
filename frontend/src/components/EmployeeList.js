import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }
      const response = await axios.get('http://localhost:4000/api/v1/employee', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2>Employee List</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <form className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>
      <button
        className="btn btn-success mb-3"
        onClick={() => window.location.href = '/employees/add'}
      >
        Add Employee
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => window.location.href = `/employees/edit/${employee._id}`}
                >
                  Edit
                </button>
                <button className="btn btn-danger me-2"
                onClick={() => window.location.href = `/employees/delete/${employee._id}`}>
                  Delete
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => window.location.href = `/employees/view/${employee._id}`}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;