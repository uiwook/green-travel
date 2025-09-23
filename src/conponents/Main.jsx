import './Main.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
    <div className="container">

      <div className='door'>
        <img className='title-img' src={'/base/bus.png'} alt="행사" 
        onClick={() => {navigate('/festivals')}}/>
        <p className="text">여행 정보</p>
      </div>
      <div className='door'>
        <img className='title-img' src={'/base/stayImage.png'} alt="숙소" 
        onClick={() => {navigate('/lodgment')}}/>
        <p className="text">숙박업소 정보</p>
      </div>
    
    </div>
    </>
  )
}

export default Main;