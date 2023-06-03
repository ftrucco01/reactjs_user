import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
