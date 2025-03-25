import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About_us from '../Pages/About_us';
import Employee_dada from '../Pages/Employee_dada'
{/*import Employee_info from '../Pages/Employee_info';*/ }
import Employee_info from '../Pages/Employee_dada';
import Todo_list from '../Pages/Todo_list';
import HomePage from './Components/Todo/HomePage';
import RegistrationPage from './Components/Todo/RegistrationPage';

{/* This is a comment inside JSX  import { Home, About, Contact } from '../Pages' */ }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About_us />} />
        {/*<Route path="/employee" element={<Employee_info />} />*/}
        <Route path="/employee_mala" element={<Employee_dada />} />
        <Route path="/login" element={<Todo_list />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  )
}

export default App





