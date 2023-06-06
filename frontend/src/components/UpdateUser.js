import React, { useState, useEffect } from 'react';
import { get, update } from '../RequestHandler';
import Navbar from './Navbar';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await get( id );
        const user = response.data.data;

        setName(user.name ?? ''); // Valor por defecto: ''
        setAge(user.age ?? ''); // Valor por defecto: ''
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await update(name, age, id);
      setApiResponse(response);
      setShowConfirmation(true);
    } catch (error) {
      console.error(error);
    }

    setName(name);
    setAge(age);
  };

  return (
    <div className="container-fluid bg-light">
      <Navbar />
      <div className="py-4">
        <div className="container justify-content-start" style={{ maxWidth: '600px' }}>
          {showConfirmation && (
            <div className="alert alert-success" role="alert">
              {apiResponse.message}
            </div>
          )}
          <h2>Edit User</h2>
          <UserForm
            name={name}
            age={age}
            handleSubmit={handleSubmit}
            setName={setName}
            setAge={setAge}
            setId={id}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
