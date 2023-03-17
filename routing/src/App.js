import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Forms/Login';
import Register from './Components/Forms/Register';
import Tasks from './Components/Tasks/Tasks';

function App() {
  const logged = false;
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login isLogged={logged} />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/tasks' element={<Tasks/>}/>
        <Route exact path='/' element={logged ? <Navigate from='/' to='/tasks' /> : <Navigate from='/' to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
