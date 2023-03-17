import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLogged }) => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    setIsLogged(true);
    navigate('/tasks');
  };
  
  return (
    <div>
      <h2>Login Form</h2>
      <Link to='/register'>Register</Link><br></br>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;