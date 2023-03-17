import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = ({ isLogged }) => {
    const navigate = useNavigate();

    const handleChange = () => {
        if(!isLogged){
            navigate('/tasks')
        }
    }
  return (
    <div>
        <h2>Login Form</h2>
        <Link to='/register'>Register</Link><br></br>
        <button onClick={handleChange}>Log in</button>
    </div>
  )
}

export default Login