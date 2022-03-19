import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <div id='main-screen'>
      <div className='App'>
          <Router>
            <Routes>
                <Route exact path='/' element={<Onboarding />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
