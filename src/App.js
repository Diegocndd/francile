import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Storyview from './pages/Storyview';

function App() {
  return (
    <div id='main-screen'>
      <div className='App'>
          <Router>
            <Routes>
                <Route exact path='/' element={<Onboarding />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/feed' element={<Feed />} />
                <Route exact path='/stories' element={<Storyview />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
