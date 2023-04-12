import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages';
import AboutUs from './pages/aboutUs';


function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/aboutUs" element={< AboutUs/>} />
              {/* <Route path="*" element= {
                  <div>404</div>
                  } /> */}
          </Routes>
       </Router>
    </>
  );
}

export default App;
