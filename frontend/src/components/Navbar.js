import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="py-4" style={{ textAlign: "center" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={`/`} className="nav-link">Main</Link>
            </li>
            <li className="nav-item">
              <Link to={`/user/add`} className="nav-link">Add</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
