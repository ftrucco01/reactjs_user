import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import ListUser from './components/ListUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<UpdateUser />} />
        <Route path="/" element={<ListUser />} />
      </Routes>
    </Router>
  );
};

export default App;
