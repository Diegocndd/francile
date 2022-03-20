import './styles.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import techonologiePath from '../../assets/img/technologie.png';
import architecturePath from '../../assets/img/architecture.png';
import person1Path from '../../assets/img/person1.png';
import person2Path from '../../assets/img/person2.png';
import person3Path from '../../assets/img/person3.png';
import person4Path from '../../assets/img/person4.png';
import person5Path from '../../assets/img/person5.png';

import { BiHomeAlt, BiTimeFive } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';

import desafio1Path from '../../assets/img/arquitetura.jpg';
import desafio2Path from '../../assets/img/arte.jpg';

const username = 'Amelie';
const stories = [
  {path: person1Path, name: 'Peter'},
  {path: person2Path, name: 'John'},
  {path: person3Path, name: 'Laura'},
  {path: person4Path, name: 'Marrie'},
  {path: person5Path, name: 'Henri'},
];
const categories = [
  {name: 'Technologie', level: 'Fácil'},
  {name: 'Architecture', level: 'Fácil'},
]

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='feed-container' style={{overflowY: 'scroll', boxSizing: 'content-box'}}>
        <div id='header-feed'>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <p id='saudacao'>Salut, {username}!</p>
              <MdOutlineNotificationsNone size={30} style={{transform: 'rotate(5deg)', cursor: 'pointer' }} />
            </div>
            <p id='subtext-1'>Explore os desafios</p>
        </div>

        <div id='stories-feed'>
          {stories.map(item => {
            return (
                <div id='stories-container' onClick={() => navigate('/stories')}>
                  <div style={{border: '3px solid #376aed', borderRadius: 25, padding: 3}}>
                    <div id='stories-person' style={{backgroundImage: `url(${item.path})`}} />
                  </div>
                  <p id='stories-name-person'>{item.name}</p>
                </div>
            )
          })}
        </div>

        <div id='categories-container'>
          <div className='categorie' style={{backgroundImage: `url(${techonologiePath})`}}>
            <div id='level-categorie'>FÁCIL</div>
            <p style={{fontWeight: 'bold'}}>Technologie</p>
          </div>

          <div className='categorie' style={{backgroundImage: `url(${architecturePath})`}}>
            <div id='level-categorie'>FÁCIL</div>
            <p style={{fontWeight: 'bold'}}>Architecture</p>
          </div>
        </div>

        <div>
          <p>Tópicos em Alta</p>
        
          <div className='desafio-container'>
            <div>
              <img src={desafio1Path} width={150} style={{borderRadius: 15}} />
            </div>

            <div style={{marginLeft: 20}}>
              <p style={{color: '#638af1'}}>ARCHITECTURE</p>
              <p style={{marginTop: 5}}>Pourquoi il besoin de données épaisses ?</p>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <AiOutlineLike size={17} />
                  <p>2.5k</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                  <BiTimeFive size={17} />
                  <p>Il y a 1h</p>
                </div>
              </div>
            </div>
          </div>

          <div className='desafio-container'>
            <div>
              <img src={desafio2Path} width={150} height={200} style={{borderRadius: 15}} />
            </div>

            <div style={{marginLeft: 20}}>
              <p style={{color: '#638af1'}}>ART</p>
              <p style={{marginTop: 5}}>Sprint de conception étape pour.</p>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <AiOutlineLike size={17} />
                  <p>829</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                  <BiTimeFive size={17} />
                  <p>Il y a 1h</p>
                </div>
              </div>
            </div>
          </div>

          <div className='desafio-container'>
            {/* <div className='image-desafio' style={{backgroundImage: `url(${desafio1Path})`}} /> */}
            <div>
              <img src={desafio1Path} width={150} style={{borderRadius: 15}} />
            </div>

            <div style={{marginLeft: 20}}>
              <p style={{color: '#638af1'}}>EXERCISE</p>
              <p style={{marginTop: 5}}>Pourquoi il besoin de données épaisses ?</p>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <AiOutlineLike size={17} />
                  <p>31</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                  <BiTimeFive size={17} />
                  <p>il y a 15 minutes </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div id='menu-footer'>
          <div className='icon-menu' onClick={() => navigate('/feed')}>
            <BiHomeAlt size={30} color='#628af1' />
            <p className='label-icon-menu'>Feed</p>
          </div>

          <div className='icon-menu' onClick={() => navigate('/desafios')}>
            <FiBookOpen size={30} color='#628af1' />
            <p className='label-icon-menu'>Desafios</p>
          </div>

          <BsFillPlusCircleFill size={50} color='#376aed' onClick={() => navigate('/criar-desafio')} />

          <div className='icon-menu' onClick={() => navigate('/feed')}>
            <FaSearch size={26} color='#628af1' />
            <p className='label-icon-menu'>Explorar</p>
          </div>
        
          <div className='icon-menu' onClick={() => navigate('/menu')}>
            <IoMdMenu size={30} color='#628af1' />
            <p className='label-icon-menu'>Menu</p>
          </div>
        </div>
    </div>
  )
}

export default Feed;
