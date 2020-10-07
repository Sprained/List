import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import Logo from '../../assets/logo.png';

import './styles.css';

export default function UserProfile() {

  const [newuf, setNewUf] = useState('');
  
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();
 
  function handleSubmit(
    name,
    cep,
    numberphone,
    uf = newuf,
    city,
    neighborhood,
    street,
    complement,
    number,
    reference,
    email,
    password
  ) {
    dispatch(updateProfileRequest(
      name,
      cep,
      numberphone,
      uf = newuf,
      city,
      neighborhood,
      street,
      complement,
      number,
      reference,
      email,
      password
    ))
  } 

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <div className="topnav">
        <img className="Logo" src={Logo} alt="Logo"/>
        <a className="signOut" onClick={handleSignOut}>Sair</a>
        <a href="#minhaConta">Minha Conta</a>
      </div>
      <hr />
      <div className="containerProfile">
        <Form initialData={profile} onSubmit={handleSubmit} className="containerForm">
          <h4> Configurações de Perfil </h4>
          <Input className="inputperfil" name="name" placeholder="Nome completo" />
          <Input className="inputperfil" name="email" placeholder="Seu endereço de e-mail" />
          <Input className="inputperfil" name="numberphone" placeholder="número de telefone" />
          <hr />
          <h4> Configurações de Endereço </h4>
          <Input className="inputperfil" name="cep" placeholder="CEP" />
          <Input className="inputperfil"name="city" placeholder="Cidade" />
          <select 
            name="uf" 
            defaultValue={profile.uf}
            className="select"
            onChange={e => setNewUf(e.target.value)}
          >
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
          <Input className="inputperfil" name="neighborhood" placeholder="Bairro" />
          <Input className="inputperfil" name="street" placeholder="Rua" />
          <Input className="inputperfil" name="number" placeholder="número" />
          <Input className="inputperfil" name="reference" placeholder="Referência" />
          <Input className="inputperfil" name="complement" placeholder="Complemento" />
          <hr />
          <h4> Configurações de Senha </h4>
          <Input className="inputperfil" type="password" name="oldPassword" placeholder="Sua senha atual" />
          <Input className="inputperfil" type="password" name="password" placeholder="Nova senha"/>
          <Input className="inputperfil" type="password" name="confirmPassword" placeholder="Confirmação de senha" />
          <button className="buttonperfil" type="submit">Atualizar Perfil</button>
        </Form>
      </div>
    </>
  )
}