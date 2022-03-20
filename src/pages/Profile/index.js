import './styles.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import person3Path from '../../assets/img/person3.png';

import { BiHomeAlt, BiHelpCircle, BiTimeFive } from 'react-icons/bi';
import { FiBookOpen, FiSettings } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsFillPlusCircleFill, BsCoin } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';

import desafio2Path from '../../assets/img/arte.jpg';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='feed-container' style={{overflowY: 'scroll'}}>
        <p style={{fontSize: 30, fontWeight: 'bold'}}>Profile</p>

        <div id='profile-box' style={{width: '100%', height: 400, backgroundColor: 'white'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
            <div style={{border: '3px solid #376aed', borderRadius: 40, padding: 3, width: 90}}>
              <div id='stories-person-profile' style={{backgroundImage: `url(${person3Path})`}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
              <p style={{fontSize: 15}}>@lauralevin</p>
              <p style={{fontSize: 28}}>Laura Levin</p>
              <p style={{fontSize: 18, color: '#376aed'}}>Nível 42</p>
            </div>
          </div>

          <div style={{paddingLeft: 30, paddingRight: 30}}>
            <p style={{fontSize: 20, marginTop: 30}}>Sobre mim</p>
            <p>Je suis directeur de la conception de l'expérience utilisateur, avec une expérience. J'adore la littérature française et j'adore pratiquer mon français avec des amis ! </p>
          </div>

          <div id='box-measures' style={{display: 'flex', flexDirection: 'row', color: 'white', marginTop: 70, marginLeft: 70, maxWidth: 10}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fd3d19', padding: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
              <p style={{fontSize: 30}}>25</p>
              <p>Desafios</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fd3d19', padding: 10}}>
              <p style={{fontSize: 30}}>42</p>
              <p>Nível</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fd3d19', padding: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10}}>
              <p style={{fontSize: 30}}>750</p>
              <p>Macarons</p>
            </div>
          </div>
        </div>

        <div style={{marginTop: 60}}>
          <p style={{fontSize: 25}}>Meus Desafios</p>

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

export default Profile;
