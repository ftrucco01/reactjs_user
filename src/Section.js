import React from 'react';

const Section = () => {
  return (
    <div className="container-fluid bg-light">
      <header className="py-4" style={{ textAlign: "center" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Main</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="py-4">
        <div className="container justify-content-start" style={{ maxWidth: "600px" }}>
          <h2>Add User</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input type="number" className="form-control" id="age" placeholder="Enter age" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section;
