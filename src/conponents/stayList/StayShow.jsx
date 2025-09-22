import { useDispatch, useSelector } from 'react-redux';
import './StayShow.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setStayInfo } from '../../store/slices/stayShowSlice';

function StayShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stayList = useSelector(state => state.stay.stayList)
  const stayInfo = useSelector(state => state.stayShow.stayInfo)

  useEffect(() => {
    const item2 = stayList.find(item2 => params.id === item2.contentid)
    dispatch(setStayInfo(item2));
  }, [])
  
  function back() {
    navigate(-1);
  }

  return (
    <>
      { stayInfo.title &&
      <div className="stay-show-container">
        <button type="button" onClick={back}>되돌아가기</button>
        <p className="stay-show-title">{stayInfo.title}</p>
        <img className='stay-show-img' src={stayInfo.firstimage} alt="" />
        <p className="stay-show-adress">{stayInfo.addr1}</p>
        <p className="stay-show-tel">{stayInfo.tel}</p>
      </div>
      }
    </>
  )
}

export default StayShow