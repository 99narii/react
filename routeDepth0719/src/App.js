import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate} from "react-router-dom";
import TopMenu from './components/TopMenu';


const FirstLevelMenu = () => (
  <div className='sideMenu'>
    <Link to="one">홈 하위1</Link>
    <Link to="two">홈 하위2</Link>
  </div>
);

const SecondLevelMenu = () => (
  <div className='sideMenu'>
    <Link to="one">홈2 하위1</Link>
    <Link to="two">홈2 하위2</Link>
  </div>
);

const ThirdLevelMenu = () => (
  <div className='sideMenu'>
    <Link to="one">홈 하위1</Link>
    <Link to="two">홈 하위2</Link>
  </div>
);

const FourthLevelMenu = () => (
  <div className='sideMenu'>
    <Link to="one">홈 하위1</Link>
    <Link to="two">홈 하위2</Link>
  </div>
);

const FirstPage =() => (
  <div className='sideMenuTab'>
    <FirstLevelMenu />
    <Outlet />
  </div>
)

const SecondPage =() => (
  <div className='sideMenuTab'>
    <SecondLevelMenu />
    <Outlet />
  </div>
)

const ThirdPage =() => (
  <div className='sideMenuTab'>
    <ThirdLevelMenu />
    <Outlet />
  </div>
)

const FourthPage =() => (
  <div className='sideMenuTab'>
    <FourthLevelMenu />
    <Outlet />
  </div>
)

const SubPageOne = () => <div>홈 하위 페이지1</div>
const SubPageTwo = () => <div>홈 하위 페이지2</div>
const SecondSubPageOne = () => <div>홈2 하위 페이지1</div>
const SecondSubPageTwo = () => <div>홈2 하위 페이지2</div>
const ThirdSubPageOne = () => <div>홈3 하위 페이지1</div>
const ThirdSubPageTwo = () => <div>홈3 하위 페이지2</div>
const FourthSubPageOne = () => <div>홈4 하위 페이지1</div>
const FourthSubPageTwo = () => <div>홈4 하위 페이지2</div>


function App() {
  return (

    <Router>
      <TopMenu></TopMenu>
      <Routes>

        <Route path="/" element={<Navigate replace to="/first/one"/>} />


          <Route path='/first/*' element={<FirstPage />}>
            <Route path='one' element={<SubPageOne />} />
            <Route path='two' element={<SubPageTwo />} />
          </Route>
          
          <Route path='/second/*' element={<SecondPage />}>
            <Route path='one' element={<SecondSubPageOne />} />
            <Route path='two' element={<SecondSubPageTwo />} />
          </Route>

          <Route path='/third/*' element={<ThirdPage />}>
            <Route path='one' element={<ThirdSubPageOne />} />
            <Route path='two' element={<ThirdSubPageTwo />} />
          </Route>

          <Route path='/fourth/*' element={<FourthPage />}>
            <Route path='one' element={<FourthSubPageOne />} />
            <Route path='two' element={<FourthSubPageTwo />} />
          </Route>

        


      </Routes>
    </Router>
  );
}

export default App;
