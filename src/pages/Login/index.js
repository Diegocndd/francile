import './styles.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';

import logo from '../../assets/img/logo.png';
import googleLogo from '../../assets/img/google-logo.png';
import facebookLogo from '../../assets/img/facebook-logo.png';
import twitterLogo from '../../assets/img/twitter-logo.png';

// import { ReactComponent as Google } from '../../assets/img/logo.svg';
// import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';
// import { ReactComponent as LogoKlever } from '../../assets/img/logo.svg';

const Login = () => {
  const navigate = useNavigate();
  const [selectedOpt, setSelectedOpt] = useState(1);

  return (
    <div id='auth-container'>
      <div id='logo-container'>
        <img src={logo} width={140} />
      </div>

      <div id='footer-authentication'>
        <div id='header-foot-auth'>
          <div id='opts-auth'>
            <p
              className='opt-auth'
              style={{opacity: selectedOpt === 1 ? 1 : 0.6}}
              onClick={() => setSelectedOpt(1)}
            >
              ACESSO
            </p>
            <p
              className='opt-auth'
              style={{opacity: selectedOpt === 2 ? 1 : 0.6}}
              onClick={() => setSelectedOpt(2)}
            >
              CADASTRO
            </p>
          </div>

          {selectedOpt === 1 ? (
            <div id='form-login'>
              <div>
                <p id='header-login'>Bem-vindo de volta!</p>
                <p>Faça login com sua conta</p>
              </div>

              <div>
                <Input text='Nome de usuário ou email' type='text' />
                <div id='pwd-input'>
                  <Input text='Senha' type='password' />
                </div>
              </div>

              <div id='button-login' onClick={() => navigate('/feed')}>
                <p>ACESSO</p>
              </div>

              <div id='forgot-password'>
                <p>Esqueceu a senha? Recupere aqui</p>
              </div>

              <div id='forgot-password'>
                <p id='option-access-login'>OU ACESSE COM</p>
              </div>

              <div id='media-social-logos'>
                <div id='media-social-content'>
                  <img src={googleLogo} width={35}/>
                  <img src={facebookLogo} width={35}/>
                  <img src={twitterLogo} width={35}/>
                </div>
              </div>
            </div>
          ) : (
            <div id='form-cadastro'>
              <p>Implementar formulário de cadastro aqui</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login;
