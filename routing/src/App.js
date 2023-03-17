import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Forms/Login';
import Register from './Components/Forms/Register';
import NotFound from './Components/NotFound';
import Tasks from './Components/Tasks/Tasks';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Router>
        <Routes>
        <Route exact path='/login' element={<Login setIsLogged={setIsLogged} />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/tasks' element={isLogged ? <Tasks isLogged={isLogged} /> : <Navigate from='/tasks' to='/login' />} />
        <Route exact path='/' element={isLogged ? <Tasks isLogged={isLogged} /> : <Navigate to="/login" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

