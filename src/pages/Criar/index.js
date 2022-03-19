import './styles.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';

import { BiHomeAlt, BiImageAlt } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';
import { BsFillPlusCircleFill, BsTextLeft } from 'react-icons/bs';
import { AiFillPlayCircle, AiOutlineLink, AiFillCloseCircle } from 'react-icons/ai';

const username = 'Amelie';

const Criar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='feed-container'>
        <p style={{fontSize: 25}}>Novo desafio</p>

        <div style={{marginTop: 30}}>
          <Input type='text' placeholder='Título do desafio' />
        </div>

        <div style={{marginTop: 30}}>
          {/* <Input type='textarea' placeholder='Descrição do desafio' /> */}
          {/* <input type='textarea' width={200} className='input-app' placeholder='Descrição do desafio' /> */}
          <textarea style={{width: '100%', height: 300, fontSize: 15, fontFamily: 'Roboto'}} placeholder='Descrição do desafio'/>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 50}}>
          <div id='edit-component' style={{backgroundColor: '#fd3d19', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 15, width: '70%'}}>
            <AiFillCloseCircle size={33} color='white' />
            <BiImageAlt size={27} color='white' />
            <AiFillPlayCircle size={27} color='white' />
            <BsTextLeft size={27} color='white' />
            <AiOutlineLink size={27} color='white' />
            <MdTextFields size={27} color='white' style={{marginRight: 13}} />
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

          <div className='icon-menu'>
            <FaSearch size={26} color='#628af1' />
            <p className='label-icon-menu'>Explorar</p>
          </div>
        
          <div className='icon-menu'>
            <IoMdMenu size={30} color='#628af1' />
            <p className='label-icon-menu'>Menu</p>
          </div>
        </div>
    </div>
  )
}

export default Criar;
