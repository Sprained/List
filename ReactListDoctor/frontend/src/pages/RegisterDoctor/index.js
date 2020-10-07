import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import Logo from '../../assets/logo.png';

import { signUpRequestPro } from '../../store/modules/auth/actions';

import './styles.css';
import '../RegisterUser/styles.css';

export default function RegisterDoctor() {
  const [value, setValue] = useState('');
  
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    lastname,
    specialty = value,
    city,
    number,
    email,
    password,
    record,
    description
  }) {
    var valid = false;
    if(document.getElementById("checkbox").checked) {
      valid = true;
      dispatch(signUpRequestPro(
      name,
      lastname,
      specialty = value,
      city,
      number,
      email,
      password,
      record,
      description
    )) } else {
      toast.error("Por favor, aceite os termos");
    }
  }
  return (
  <>
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
        <h4 className="title-register-doctor">Por favor, preencha corretamente os campos:</h4>
        <Form onSubmit={handleSubmit}>
        <div className="inputLongo">
          <div>
          <p className="p-inputLongo">
            Especialidade*:
          </p>
          <select 
          name="specialty"
          className="input-inputLongo" 
          defaultValue="Selecionar"
          onChange={e => setValue(e.target.value)}
          >
          <option disabled value="Selecionar">Selecionar</option>
          <option value="Alergista">Alergista</option>
          <option value="Anátomopatologista">Anátomopatologista</option>
          <option value="Anestesiologista">Anestesiologista</option>
          <option value="Angiologista">Angiologista</option>
          <option value="Cardiologista">Cardiologista</option>
          <option value="Cardiologista pediátrico">Cardiologista pediátrico</option>
          <option value="Cirurgião buco-maxilo-facial">Cirurgião buco-maxilo-facial</option>
          <option value="Cirurgião cardiovascular">Cirurgião cardiovascular</option>
          <option value="Cirurgião cranio-maxilo-facial">Cirurgião cranio-maxilo-facial</option>
          <option value="Cirurgião da mão">Cirurgião da mão</option>
          <option value="Cirurgião de cabeça e pescoço">Cirurgião de cabeça e pescoço</option>
          <option value="Cirurgião do aparelho digestivo">Cirurgião do aparelho digestivo</option>
          <option value="Cirurgião Geral">Cirurgião Geral</option>
          <option value="Cirurgião oncológico">Cirurgião oncológico</option>
          <option value="Cirurgião pediátrico">Cirurgião pediátrico</option>
          <option value="Cirurgião plástico">Cirurgião plástico</option>
          <option value="Cirurgião torácico">Cirurgião torácico</option>
          <option value="Cirurgião vascular">Cirurgião vascular</option>
          <option value="Coloproctologista">Coloproctologista</option>
          <option value="Dentista">Dentista</option>
          <option value="Dermatologista">Dermatologista</option>
          <option value="Endocrinologista">Endocrinologista</option>
          <option value="Endocrinologista pediátrico">Endocrinologista pediátrico</option>
          <option value="Endoscopista">Endoscopista</option>
          <option value="Enfermeiro">Enfermeiro</option>
          <option value="Especialista em Administração em Saúde">Especialista em Administração em Saúde</option>
          <option value="Especialista em Diagnóstico por imagem">Especialista em Diagnóstico por imagem</option>
          <option value="Especialista em Dor">Especialista em Dor</option>
          <option value="Especialista em Medicina Estética">Especialista em Medicina Estética</option>
          <option value="Especialista em Medicina Física e Reabilitação">Especialista em Medicina Física e Reabilitação</option>
          <option value="Especialista em Medicina Nuclear">Especialista em Medicina Nuclear</option>
          <option value="Especialista em Medicina Preventiva">Especialista em Medicina Preventiva</option>
          <option value="Fisioterapeuta">Fisioterapeuta</option>
          <option value="Fonoaudiólogo">Fonoaudiólogo</option>
          <option value="Gastroenterologista">Gastroenterologista</option>
          <option value="Gastroenterologista pediátrico">Gastroenterologista pediátrico</option>
          <option value="Generalista">Generalista</option>
          <option value="Geneticista">Geneticista</option>
          <option value="Geriatra">Geriatra</option>
          <option value="Ginecologista">Ginecologista</option>
          <option value="Hematologista">Hematologista</option>
          <option value="Hepatologista">Hepatologista</option>
          <option value="Homeopata">Homeopata</option>
          <option value="Infectologista">Infectologista</option>
          <option value="Infectologista pediátrico">Infectologista pediátrico</option>
          <option value="Intensivista">Intensivista</option>
          <option value="Internista">Internista</option>
          <option value="Mastologista">Mastologista</option>
          <option value="Médico Acupunturista">Médico Acupunturista</option>
          <option value="Médico clínico geral">Médico clínico geral</option>
          <option value="Médico de emergência">Médico de emergência</option>
          <option value="Médico de família">Médico de família</option>
          <option value="Médico de tráfego">Médico de tráfego</option>
          <option value="Médico do esporte">Médico do esporte</option>
          <option value="Médico do Sono">Médico do Sono</option>
          <option value="Médico do trabalho">Médico do trabalho</option>
          <option value="Médico hiperbarista">Médico hiperbarista</option>
          <option value="Médico perito">Médico perito</option>
          <option value="Nefrologista">Nefrologista</option>
          <option value="Nefrologista pediátrico">Nefrologista pediátrico</option>
          <option value="Neurocirurgião">Neurocirurgião</option>
          <option value="Neurofisiologista">Neurofisiologista</option>
          <option value="Neurologista">Neurologista</option>
          <option value="Neurologista pediátrico">Neurologista pediátrico</option>
          <option value="Nutricionista">Nutricionista</option>
          <option value="Nutrólogo">Nutrólogo</option>
          <option value="Oftalmologista">Oftalmologista</option>
          <option value="Oncologista">Oncologista</option>
          <option value="Ortopedista - Traumatologista">Ortopedista - Traumatologista</option>
          <option value="Osteopata">Osteopata</option>
          <option value="Otorrino">Otorrino</option>
          <option value="Patologista clínico">Patologista clínico</option>
          <option value="Pediatra">Pediatra</option>
          <option value="Pneumologista">Pneumologista</option>
          <option value="Pneumologista pediátrico">Pneumologista pediátrico</option>
          <option value="Podologista">Podologista</option>
          <option value="Psicanalista">Psicanalista</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Psicopedagogo">Psicopedagogo</option>
          <option value="Psiquiatra">Psiquiatra</option>
          <option value="Quiropraxista">Quiropraxista</option>
          <option value="Radiologista">Radiologista</option>
          <option value="Radioterapeuta">Radioterapeuta</option>
          <option value="Reumatologista">Reumatologista</option>
          <option value="Reumatologista pediátrico">Reumatologista pediátrico</option>
          <option value="Sexólogo">Sexólogo</option>
          <option value="Terapeuta complementar">Terapeuta complementar</option>
          <option value="Terapeuta ocupacional">Terapeuta ocupacional</option>
          <option value="Urologista">Urologista</option>
          </select>
          </div>
        </div>
        <div className="inputs">
          <div>
            <p className="p-inputs">
              Nome*:
            </p>
            <Input name="name" className="inputs-inputs" type="text" />
          </div>
          <div>
            <p className="p-input-direita">
              Sobrenome*:
            </p>
            <Input name="lastname" className="input-direita " type="text" />
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Cidade*:
          </p>
          <Input name="city" type="text" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Descrição*:
          </p>
          <Input name="description" type="text" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Número do celular*:
          </p>
          <Input name="number" type="number" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputLongo2">
          <div>
          <p className="p-inputLongo">
            Endereço de e-mail*:
          </p>
          <Input name="email" type="email" className="input-inputLongo"/>
          </div>
        </div>
        <div className="inputs">
          <div>
            <p className="p-inputs">
              Crie uma senha*:
            </p>
            <Input name="password" className="inputs-inputs" type="password" />
          </div>
          <div>
            <p className="p-input-direita">
              Número de registro (ex. CRM, CRP, CRO)*:
            </p>
            <Input name="record" className="input-direita " type="number" />
          </div>
        </div>
        <div className="checkboxdiv">
        <div>
          <Input name="checkbox" id="checkbox" type="checkbox" className="checkbox" name="checkbox" />
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
        <div className="footer_copy_doctor">
          <p className="footer_text">www.listdoctor.com.br © 2020 - Agende agora sua consulta</p>
        </div>
      </footer>
  </>
)
}