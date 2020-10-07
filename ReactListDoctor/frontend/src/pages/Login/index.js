import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import 'react-toastify/dist/ReactToastify.css';


import { signInRequest } from '../../store/modules/auth/actions';

import Logo from '../../assets/logo.png';

import './styles.css';
import '../RegisterDoctor/styles.css';


export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password}) {
    dispatch(signInRequest(email, password));
  }
  return (
    <div>
    <div className="topnav">
      <img className="Logo" src={Logo} alt="Logo"/>
      <a href="/login">Login</a>
      <a href="#profissionais">Profissionais</a>
      <a href="#sobre">Sobre</a>
      <a href="/">Home</a>
    </div>
    <hr></hr>
    <div className="register-container">
      <div className="contentLogin-form">
        <h2 className="titleLogin">Para continuar, inicie a sessão:</h2>
        <Form onSubmit={handleSubmit}>
        <div className="inputLongo">
          <div>
          <p className="p-inputLongoLogin">
            Endereço de e-mail*:
          </p>
          <Input name="email" type="email" className="input-inputLongoLogin"/>
          </div>
        </div>
        <div className="inputLongo">
          <div>
          <p className="p-inputLongoLogin">
            Senha*:
          </p>
          <Input name="password" type="password" className="input-inputLongoLogin"/>
          </div>
        </div>
        <div className="divButtonLogin">
        <button type="submit" className="btnLogin">{ loading ? 'Carregando...' : 'Entrar'} </button>
        </div>
        </Form>
        <p> <a href="#" className="stylelink"> Esqueceu sua senha? </a></p>
        <label className="stylelabel">Faça seu cadastro <a href="/register-user" className="stylelink">como paciente</a> ou <a href="/register-doctor" className="stylelink">como profissional de saúde.</a></label>
        </div>
        </div>
        <footer>
        <div className="footer_copy">
          <p className="footer_text">www.listdoctor.com.br © 2020 - Agende agora sua consulta</p>
        </div>
      </footer>
    </div>
  )
}