import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import Logo from '../../assets/logo.png';

import { signUpRequest } from '../../store/modules/auth/actions';

import './styles.css';

export default function RegisterUser() {
  const [ufValue, setUfValue] = useState('');

  const dispatch = useDispatch();
  
  function handleSubmit({ 
    name,
    cpf,
    cep,
    numberphone,
    uf = ufValue,
    city,
    neighborhood,
    street,
    complement,
    number,
    reference,
    email,
    password
  }) {
    var valid = false;
    if(document.getElementById("checkbox").checked) {
      valid = true;
    dispatch(signUpRequest(
      name,
      cpf,
      cep,
      numberphone,
      uf = ufValue,
      city,
      neighborhood,
      street,
      complement,
      number,
      reference,
      email,
      password
    )) } else {
      toast.error("Por favor, aceite os termos");
    }
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
      <div className="content-form">
        <h4 className="title">Por favor, preencha corretamente os campos:</h4>
        <Form onSubmit={handleSubmit}>
        <div className="inputLongo">
          <div>
          <p className="p-inputLongo">
            Nome Completo*:
          </p>
          <Input name="name" type="text" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputs">
          <div>
            <p className="p-inputs">
              CPF*:
            </p>
            <Input name="cpf" className="inputs-inputs" type="number" />
          </div>
          <div>
            <p className="p-input-direita">
              CEP*:
            </p>
            <Input name="cep" className="input-direita " type="number" />
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Número do celular*:
          </p>
          <Input name="numberphone" type="number" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputs-pequenos">
          <div>
            <p className="p-input-1">
              Cidade*:
            </p>
            <Input name="city" className="input1" type="text" />
          </div>
          <div>
            <p className="p-input-2">
              UF*:
            </p>
            <select 
            name="uf" 
            className="input2 " 
            defaultValue="Selecionar"
            onChange={e => setUfValue(e.target.value)}
            >
            <option disabled value="Selecionar">Selecionar</option>
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
          </div>
          <div>
            <p className="p-input-3">
              Bairro*:
            </p>
            <Input name="neighborhood"className="input3 " type="text" />
          </div>
        </div>
        <div className="inputs-pequenos">
          <div>
            <p className="p-input-1">
              Rua*:
            </p>
            <Input name="street" className="input1" type="text" />
          </div>
          <div>
            <p className="p-input-2">
              Número*:
            </p>
            <Input name="number" className="input2 " type="text" />
          </div>
          <div>
            <p className="p-input-3">
              Complemento*:
            </p>
            <Input name="complement" className="input3 " type="text" />
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Referência*:
          </p>
          <Input name="reference" type="text" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputs">
          <div>
            <p className="p-inputs">
              Endereço de e-mail*:
            </p>
            <Input name="email" type="email" className="inputs-inputs" />
          </div>
          <div>
            <p className="p-input-direita">
              Crie uma senha*:
            </p>
            <Input name="password" className="input-direita " type="password" />
          </div>
        </div>
        <div className="checkboxdiv">
          <div>
          <Input name="checkbox" type="checkbox" className="checkbox" name="checkbox" />
          <label className="fontcolorcheckbox" for="checkbox"> Eu aceito os <a href="/termos">termos e condições</a>, e a{" "}
            <a href="/privacidade">política de privacidade</a> do ListDoctor.*</label>
          </div>
        </div>
        <div className="divButton">
        <button type="submit" className="btn"> Registrar-se</button>
        </div>
        </Form>
      </div>      
    </div>
    <footer>
        <div className="footer_copy">
          <p className="footer_text">www.listdoctor.com.br © 2020 - Agende agora sua consulta</p>
        </div>
      </footer>
    </div>
  );
}