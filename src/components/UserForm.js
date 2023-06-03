import React from "react";

const UserForm = ({name, age, handleSubmit, setName, setAge, setId, id}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control" 
                id="name" 
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number" 
                className="form-control" 
                id="age" 
                placeholder="Enter age"
                value={age}
                onChange={(event) => setAge(event.target.value)} 
               />
            </div>

            <input 
              type="hidden" 
              value={id} 
              onChange={(event) => setId(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UserForm;