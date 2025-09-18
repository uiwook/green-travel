import './Main.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <img className='title-img' src={'/base/Sungnyemun.jpg'} alt="대문" 
      onClick={() => {navigate('/festivals')}}/>
    </>
  )
}

export default Main;