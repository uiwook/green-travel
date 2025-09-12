import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './conponents/common/Header.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
