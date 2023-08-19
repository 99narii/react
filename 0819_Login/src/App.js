import logo from './logo.svg';
import './App.css';
import { Item_nm, Item_price } from './AddItem/atom';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Link, Route, Routes, Router } from 'react-router-dom';
import AddItem from './AddItem';
import Login from './Login';



function App() {


  return (
    <RecoilRoot>
            <Link to ='/login'><button>로그인</button></Link> 

      <Routes>
        <Route exact path="/" element={<AddItem />} key="add" />
        <Route exact path="/login" element={<Login />} key="login" />

      </Routes>

    </RecoilRoot>
  );
}

export default App;
