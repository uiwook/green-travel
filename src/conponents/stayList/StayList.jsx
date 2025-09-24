import { useDispatch, useSelector } from 'react-redux'
import './StayList.css'
import { useNavigate } from 'react-router-dom';
import { stayIndex } from '../../store/thunks/stayThunk';
import { useCallback, useEffect, useState } from 'react';
import { setScrollEventFlg, resetStayList } from '../../store/slices/staySlice';
import { codeIndex } from '../../store/thunks/codeThunk';

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stayList = useSelector(state => state.stay.stayList);
  const scrollEventFlg = useSelector(state => state.stay.scrollEventFlg);
  const page = useSelector(state => state.stay.page);
  const codeList = useSelector(state => state.code.areaCode);

  const [selectedAreaCode, setSelectedAreaCode] = useState('');

  const filterStayList = selectedAreaCode ? stayList.filter(
    stay => stay.areacode === selectedAreaCode) : stayList;

  useEffect(() => {
    window.addEventListener('scroll', addNextpage);
    return () => {
      window.removeEventListener('scroll', addNextpage);
    }
  }, []);

  useEffect(() => {
    dispatch(resetStayList());
    dispatch(stayIndex({areacode: selectedAreaCode, pageNo: 1}))
  }, [dispatch, selectedAreaCode])

    useEffect(() => {
    if(codeList.length === 0) {
      dispatch(codeIndex());
    }
  }, [dispatch, codeList.length]); 

  const addNextpage = useCallback(() => {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치

    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex({ areacode: selectedAreaCode, pageNo: page +1}));
    }
  }, [dispatch, selectedAreaCode, page, scrollEventFlg])

  function back() {
    navigate(-1);
  }

  function redirectShow(item2) {
    navigate(`/lodgment/${item2.contentid}`);
  }



  return (
    <>
      <button className='back-btn' onClick={back}>◁</button>
      <div className="stay-navigate-btn">
        <button type="button" key="all" onClick={() => {setSelectedAreaCode('')}}>
          전체
        </button>
        {
          codeList && codeList.map((item, index) => {
            return (
                <button type="button" key={item.code + index} 
                onClick={() => {setSelectedAreaCode(item.code)}}>
                  {item.name}
                  </button>
            )
          })       
        }
      </div>
      <div className="stay-container">
        {
          filterStayList && filterStayList.map((item2, index) => {
            return(
        <div className="stay-card" onClick={() => {redirectShow(item2)}} key={item2.contentid + index}>
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