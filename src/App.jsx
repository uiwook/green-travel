import { Outlet, ScrollRestoration } from 'react-router-dom';
import './App.css';
import Header from './conponents/common/Header.jsx';

function App() {

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
