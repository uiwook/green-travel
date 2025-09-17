import { Outlet, ScrollRestoration } from 'react-router-dom';
import './App.css';
import Header from './conponents/common/Header.jsx';
import { useEffect } from 'react';
import { localStorageUtil } from './utils/localStorageUtil.js';
import { dateFormatter } from './utils/dateFormatter.js';

function App() {
  useEffect(() => {
    // 로컬스토리지에 저장된 날짜 획득
    const clearDate = localStorageUtil.getClearDate();
    const nowDate = dateFormatter.formatDateToYMD(new Date());

    if(clearDate !== nowDate) {
      //  저장된 날짜 없으면 로컬스토리지에 현재 날짜 저장
      localStorageUtil.clearLocalStorage();
      localStorageUtil.setClearDate(nowDate);

      // state가 초기화 되지않는 현상을 해결하기 위해, 강제로 화면 새로고침
      window.location.reload();
    } else {
      //  저장된 날짜 있으면 오늘날짜랑 비교
    }
    }, [])
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>

      {/* 스크롤 초기화, 최상위 컴포넌트에 한번만 추가 */}
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default App
