import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import TimeLine from './screen/TimeLine';
import Search from './screen/Search';



export default function App() {

  // const ArrListItem = ['홈', '검색', '탐색', '알림', '프로필'];


  return (
    <div className="App">
        <header id='header'>
              <li>로그인</li>
        </header>
              
    <div style={{display:'flex'}}>
      <aside id='aside' >
        <ul id='a_list_ul'>
          {/* {ArrListItem.map((Item) => (
            <li id='a_list_li'><label>{Item}</label></li>
          ))} */}
            <li>홈</li>
            <li>검색</li>
            <li>탐색</li>
            <li>알림</li>
            <li>프로필</li>

        </ul>
      </aside>
      
      <section id='content'>
          <Routes>
            <Route path="/" element={<TimeLine />} key="TimeLine" />
            <Route path="/Search" element={<Search />} key="Search" />
          </Routes>

      </section>
      </div>

    </div>
  );
}


