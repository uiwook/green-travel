import { useDispatch, useSelector } from 'react-redux'
import './StayList.css'
import { useNavigate } from 'react-router-dom';
import { stayIndex } from '../../store/thunks/stayThunk';
import { useEffect } from 'react';
import { setScrollEventFlg } from '../../store/slices/staySlice';

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stayList = useSelector(state => state.stay.stayList);
  const scrollEventFlg = useSelector(state => state.stay.scrollEventFlg);

  useEffect(() => {
    if (stayList.length === 0) {
      dispatch(stayIndex());
    }
    
    window.addEventListener('scroll', addNextpage);
    return () => {
      window.removeEventListener('scroll', addNextpage);
    }
  }, []);

  function addNextpage() {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex());
    }
  }

  function back() {
    navigate(-1);
  }

  function redirectShow(item2) {
    navigate(`/lodgment/${item2.contentid}`);
  }

  return (
    <>
      <button className='back-btn' onClick={back}>◁</button>
      <div className="stay-container">
        {
          stayList && stayList.map((item2) => {
            return(
        <div className="stay-card" onClick={() => {redirectShow(item2)}} key={item2.contentid}>
          <div className="stay-card-img" style={{backgroundImage: `url('${item2.firstimage}')`}}></div>
          <p className='stay-card-title'>{item2.title}</p>
          <p className='stay-card-adress'>{item2.addr1}</p>
        </div>
            )
          })  
        }
      </div>
    </>
  )
}

export default StayList