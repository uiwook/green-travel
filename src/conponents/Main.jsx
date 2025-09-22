import './Main.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
    <div className="container">

      <div className='door'>
        <img className='title-img' src={'/base/Sungnyemun.jpg'} alt="대문" 
        onClick={() => {navigate('/festivals')}}/>
        <p className="text">여행 정보</p>
      </div>
      <div className='door'>
        <img className='title-img' src={'/base/stayImage.png'} alt="대문" 
        onClick={() => {navigate('/lodgment')}}/>
        <p className="text">숙박업소 정보</p>
      </div>
    
    </div>
    </>
  )
}

export default Main;