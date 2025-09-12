import './Main.css'
import titleImg from '../assets/Sungnyemun.jpg'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <img className='title-img' src={titleImg} alt="대문" 
      onClick={() => {navigate('/festivals')}}/>
    </>
  )
}

export default Main;