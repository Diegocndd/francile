import './styles.css';
import 'swiper/css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRightShort } from "react-icons/bs";
import placeholder1 from '../../assets/img/placeholder1.png';
import placeholder2 from '../../assets/img/placeholder2.png';
import placeholder3 from '../../assets/img/placeholder3.png';
import placeholder4 from '../../assets/img/placeholder4.png';

const Onboarding = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [selectedDot, setSelectedDot] = useState(1);

  return (
    <div>
        <div id='images-container'>
          <div id='horizontal-images'>
            <img src={placeholder1} className='image' width={130} height={190} />
            <img src={placeholder2} className='image-right image' width={200} height={190} />
          </div>

          <div id='horizontal-images'>
            <img src={placeholder3} className='image' width={200} height={190} />
            <img src={placeholder4} className='image-right image' width={130} height={190} />
          </div>

        </div>

        <div id='swiper-container'>
          <div id='swiper-component'>
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='slide-component'>
                  <p className='title-slider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <p className='text-slider'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </SwiperSlide>

                <SwiperSlide className='slide-component'>
                  <p className='title-slider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <p className='text-slider'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </SwiperSlide>

                <SwiperSlide className='slide-component'>
                  <p className='title-slider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <p className='text-slider'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </SwiperSlide>

                <SwiperSlide className='slide-component'>
                  <p className='title-slider'>Desafios imersivos da Cultura Francófona</p>
                  <p className='text-slider'>Somos a comunidade digital de cultura francófona onde permite que os usuários aprendam através de desafios e experiências imersivas.</p>
                </SwiperSlide>
            </Swiper>
          </div>
          <div id='footer-swiper'>
            <div id='dots-container'>
              <div className='dots-swiper' style={{opacity: selectedDot === 1 ? 1 : 0.4, width: selectedDot === 1 ? 20 : 10}} />
              <div className='dots-swiper' style={{opacity: selectedDot === 2 ? 1 : 0.4, width: selectedDot === 2 ? 20 : 10}} />
              <div className='dots-swiper' style={{opacity: selectedDot === 3 ? 1 : 0.4, width: selectedDot === 3 ? 20 : 10}} />
              <div className='dots-swiper' style={{opacity: selectedDot === 4 ? 1 : 0.4, width: selectedDot === 4 ? 20 : 10}} />
            </div>
            <div
              id='button-swiper'
              onClick={() => {
                if (selectedDot < 4) {
                  setSelectedDot(selectedDot + 1)
                  swiperRef.current.swiper.slideNext(200);
                } else {
                  navigate('/login');
                }
              }}
            >
              <BsArrowRightShort size={40} color='white' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Onboarding;
