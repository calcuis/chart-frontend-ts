import './App.css';
import { Routes, Route } from 'react-router-dom';
import Bar from './Bar';
import Line from './Line';
import Pie from './Pie';
import Bubble from './Bubble';
import Group from './Group';
import GroupErr from './GroupErr';
import Navbar from './Navbar';

function App() {

  return (
    <>
    <div className='logo'>cαlcμ</div>
    <Navbar />
    <div className="container">
      <Routes>
          <Route path="/" element={<Bar />} />
          <Route path="/Line" element={<Line />} />
          <Route path="/Pie" element={<Pie />} />
          <Route path="/Bubble" element={<Bubble />} />
          <Route path="/Group" element={<Group />} />
          <Route path="/GroupErr" element={<GroupErr />} />
      </Routes>
    </div>
    </>
  )
}

export default App
