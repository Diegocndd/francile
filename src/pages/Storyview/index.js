import './styles.css';
import 'swiper/css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import person3Path from '../../assets/img/person3.png';

import backgroundStories from '../../assets/img/nature.jpg';

import { IoMdClose } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';

const Storyview = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <div id='storyview-container'>
      <div id='content-stories' style={{backgroundImage: `url(${backgroundStories})`}}>
        <div id='gradient-stories' />
        <div id='header-content-stories'>
          <div id='progress-stories'>
            <div className='mark-stories' />
            <div className='mark-stories' style={{opacity: 0.5}} />
            <div className='mark-stories' style={{opacity: 0.5}} />
          </div>

          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <div id='info-person'>
              <div id='stories-person' style={{backgroundImage: `url(${person3Path})`}} />
              <div id='user-data-stories'>
                <p style={{color: 'white'}}>Laura Levin</p>
                <p style={{color: 'white', fontSize: 12}}>4m ago</p>
              </div>
            </div>

            <IoMdClose size={30} color='white' style={{cursor: 'pointer'}} onClick={() => navigate('/feed')}/>
          </div>

        </div>

        <div id='text-stories'>
          <p id='title-stories'>Voulez-vous vivre une vie heureuse ? Le sourire.</p>
          <p id='content-text-stories'>Parfois, il n'y a aucune raison de sourire, mais je sourirai quand même à cause de la vie. Oui, je fais partie de ces gens qui sourient toujours.</p>
        </div>
      </div>

      <div id='footer-stories'>
        <IoIosArrowUp size={20} color='white' />
        <div id='button-comment'>
          <p id='comment-text'>Comentar</p>
        </div>
      </div>
    </div>
  )
}

export default Storyview;
