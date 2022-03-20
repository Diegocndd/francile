import './styles.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { BiHomeAlt, BiHelpCircle } from 'react-icons/bi';
import { FiBookOpen, FiSettings } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsFillPlusCircleFill, BsCoin } from 'react-icons/bs';

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='feed-container' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={() => navigate('/perfil')}>
          <CgProfile size={30} />
          <p style={{fontSize: 25, marginLeft: 40}}>Perfil</p>
        </div>

        <div style={{backgroundColor: 'black', height: 1, width: '100%', opacity: 0.1, marginTop: 10, marginBottom: 10}} />

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <BsCoin size={30} />
          <p style={{fontSize: 25, marginLeft: 40}}>Recompensas</p>
        </div>

        <div style={{backgroundColor: 'black', height: 1, width: '100%', opacity: 0.1, marginTop: 10, marginBottom: 10}} />

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <BiHelpCircle size={30} />
          <p style={{fontSize: 25, marginLeft: 40}}>Suporte</p>
        </div>

        <div style={{backgroundColor: 'black', height: 1, width: '100%', opacity: 0.1, marginTop: 10, marginBottom: 10}} />

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FiSettings size={30} />
          <p style={{fontSize: 25, marginLeft: 40}}>Configurações</p>
        </div>

        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80, cursor: 'pointer'}}>
          <div id='exit-button' style={{backgroundColor: '#fd3d19', width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', borderRadius: 10, paddingTop: 10, paddingBottom: 10}}>
            SAIR
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
