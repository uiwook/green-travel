import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { festivalIndex } from "../../store/thunks/festivalThunk";

function Test() {
  const dispatch = useDispatch();
  const festivalList = useSelector(state => state.festival.list)

  useEffect(() => {
    if(festivalList.length === 0) {
      dispatch(festivalIndex())
    }
  },[])

  const groupedFestivals = festivalList.reduce((acc, festival) => {
    const { areacode } = festival;
    // acc 객체에 해당 areacode 키가 없으면 빈 배열로 초기화
    if (!acc[areacode]) {
      acc[areacode] = [];
    }
    // 해당 areacode 키에 festival 추가
    acc[areacode].push(festival);
    return acc;
  }, {});

  return (
    <>
      <h2>안녕</h2>
      {
      festivalList.length > 0 && festivalList.map((item) => {
        
        return(
          <>
            <div className="card">
              <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
              <p className="card-title">{item.title}</p>
              <p className="card-area">{item.areacode}</p>
            </div>
          </>
        )
      })
      }
    </>
  )
}

export default Test