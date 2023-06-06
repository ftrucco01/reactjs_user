import React, { useState } from 'react';
import { save } from '../RequestHandler';
import Navbar from './Navbar';
import UserForm from './UserForm';

const AddUser = () => { 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [id, setId] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        const response = await save(name, age);
        setApiResponse(response);
        setShowConfirmation(true);
    }catch(error){
      console.error(error);
    }

    setName('');
    setAge('');
  }; 

  return (
    <div className="container-fluid bg-light">
      <Navbar />
      <div className="py-4">
        <div className="container justify-content-start" style={{ maxWidth: "600px" }}>
        {showConfirmation && (
            <div className="alert alert-success" role="alert">
              {apiResponse.message}
            </div>
          )}
          <h2>Add User</h2>
          <UserForm
            name={name}
            age={age}
            handleSubmit={handleSubmit}
            setName={setName}
            setAge={setAge}
            setId={setId}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
