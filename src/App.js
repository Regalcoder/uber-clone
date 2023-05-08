import {BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Home from './pages';
import AboutUs from './pages/aboutUs';
import Safety from './pages/safety';
import Register from './pages/form';
import Ride from './pages/ride';
import Money from './pages/money';


function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/aboutUs" element={< AboutUs/>} />
            <Route path="/safety" element={< Safety/>} />
            <Route path="/form" element={< Register/>} />
            <Route path='/ride' element={<Ride/>} />
            <Route path='/money' element={<Money/>} />
              {/* <Route path="*" element= {
                  <div>404</div>
                  } /> */}
          </Routes>
       </Router>
    </>
  );
}

export default App;
