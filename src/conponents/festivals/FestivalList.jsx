import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { useCallback, useEffect, useState } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk';
import { dateFormatter } from '../../utils/dateFormatter';
import { resetFestivalList, setScrollEventFlg } from '../../store/slices/festivalSlice';
import { useNavigate } from 'react-router-dom';
import { codeIndex } from '../../store/thunks/codeThunk';

function FestivalList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const festivalList = useSelector(state => state.festival.list);
  const page = useSelector(state => state.festival.page);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);
  const codeList = useSelector(state => state.code.areaCode);
  
  const [selectedAreaCode, setSelectedAreaCode] = useState('');
  
  // 지역코드 같은 festivalList 가져오기
  const filterFestivalList = selectedAreaCode ? festivalList.filter(
    festival => festival.areacode === selectedAreaCode) : festivalList;

  // 다음 페이지 가져오기
  const addNextpage = useCallback(() => {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치
    
    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(festivalIndex({ areacode: selectedAreaCode, pageNo: page + 1}));
    }
  }, [dispatch, selectedAreaCode, page, scrollEventFlg])

  useEffect(() => {
    window.addEventListener('scroll', addNextpage);
    return () => {
      window.removeEventListener('scroll', addNextpage);
    }
  }, [addNextpage]);

  useEffect(() => {
    dispatch(resetFestivalList());
    dispatch(festivalIndex({ areacode: selectedAreaCode, pageNo: 1}));
  }, [dispatch, selectedAreaCode])

  useEffect(() => {
    if(codeList.length === 0) {
      dispatch(codeIndex());
    }
  }, [dispatch, codeList.length]); 


  // 상세페이지로 이동
    function redirectShow(item) {
      // dispatch(setFestivalInfo(item));
      navigate(`/festivals/${item.contentid}`);
    }

  function back() {
  navigate(-1);
  }

  return (
    <>
      <button className='back-btn' onClick={back}>◁</button>
      <div className="navigate-btn">
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
      <div className="container">
        {
          // festivalList && festivalList.map((item) => {
          filterFestivalList && filterFestivalList.map((item, index) => {
            return (
        <div className="card" onClick={() => {redirectShow(item)}} key={item.contentid + index} >
          <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
          <p className="card-title">{item.title}</p>
          <p className="card-period">{dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}</p>
        </div>
            )
          })
        }
      </div>
      {/* <button type="button" onClick={addNextpage}>더 보기</button> */}
    </>
  )
}

export default FestivalList