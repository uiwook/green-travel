import { useDispatch } from 'react-redux';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk';

function FestivalList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(festivalIndex());
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">YY-MM-DD ~ YY-MM-DD</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">YY-MM-DD ~ YY-MM-DD</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">YY-MM-DD ~ YY-MM-DD</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className="card-title">안동 하회탈 축제</p>
          <p className="card-period">YY-MM-DD ~ YY-MM-DD</p>
        </div>
      </div>
    </>
  )
}

export default FestivalList