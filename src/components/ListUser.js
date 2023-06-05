import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { list, remove } from '../RequestHandler';
import { Link } from 'react-router-dom';

const ListUser = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await list();
            const userList = response.data.data;
            setUsers(userList);
            setTotalPages(Math.ceil(userList.length / itemsPerPage));
        } catch (error) {
            console.error(error);
        }
        };

        fetchUsers();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const handleDelete = async (id) => {
        try {
          const response = await remove(id);
          setApiResponse(response);
          console.log(response);
          setShowConfirmation(true);

          // Remove the deleted user from the users state
          setUsers(users.filter((user) => user._id !== id));

        } catch (error) {
          console.error(error);
        }
    };
      

  return (
    <div className="container-fluid bg-light">
      <Navbar />
      <div className="py-4">
        <div className="container justify-content-start" style={{ maxWidth: '600px' }}>
          {showConfirmation && (
            <div className="alert alert-success" role="alert">
              {apiResponse.data.message}
            </div>
          )}
          <h2>Users list</h2>

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="3">No users found.</td>
                </tr>
              ) : (
                currentItems.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(user._id)} 
                        className="btn btn-danger me-2"
                      >
                        Delete
                      </button>
                      <Link to={`/user/edit/${user._id}`} className="btn btn-primary">Edit</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>

        </div>
      </div>
    </div>
  );
};

export default ListUser;
