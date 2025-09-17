import { useNavigate, useParams } from 'react-router-dom';
import './FestivalShow.css'
import { useDispatch, useSelector } from 'react-redux';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { useEffect } from 'react';
import { setFestivalInfo } from '../../store/slices/festivalShowSlice.js';

function FestivalShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const festivalList = useSelector(state => state.festival.list)
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo)
  // 전체 리스트 정보 => festivalSlice.festivalList
  // 클릭한 카드의 정보를 특정할 수 있는 값 => 세그먼트 파라미터 {params.id}
  // 클릭한 카드의 정보 1개는 전체 리스트 정보에 있는 것중 1개 (item)사용
  // info스테이트에 저장할 값 => 클릭한 카드의 정보 1개
  // show에서 info스테이트 저장
  
  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid)
    dispatch(setFestivalInfo(item)); // setFestivalInfo에 item의 값을 넣어주는 처리
  }, []);

  function redirectBack() {
    navigate(-1);
  }

  return (
    <>
      { festivalInfo.title && 
      <div className="show-container">
        <button type="button" onClick={redirectBack}>되돌아가기</button>
        <p className='show-title'>{festivalInfo.title}</p>
        <p className='show-period'>{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
        <img src={festivalInfo.firstimage} alt={`${festivalInfo.title}사진`} className='show-img'/>
        <p className='show-addr'>{festivalInfo.addr1}</p>
      </div>
      }
    </>
  )
}

export default FestivalShow;