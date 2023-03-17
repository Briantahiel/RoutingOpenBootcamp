import { useNavigate } from 'react-router-dom';

const Tasks = ({ isLogged }) => {
  const navigate = useNavigate();

  if (!isLogged) {
    navigate('/login');
    return null;
  }
  const goBack = () => {
    navigate(-1);
}
  
  return (
    <div>
      <h2>Tasks</h2>
      <p>List of tasks.</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Tasks;



