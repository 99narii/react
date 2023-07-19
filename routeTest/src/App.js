import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,redirect } from 'react-router-dom';
import Home from './screen/Home';
import About from './screen/About';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <TopMenu></TopMenu>
        <Routes>
          <Route path='/' element={<Home></Home>} key="Home"></Route>
          <Route path='/about' element={<About></About>} key="About"></Route>
        </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
