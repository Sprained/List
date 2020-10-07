export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(
  name,
  cpf,
  cep,
  numberphone,
  uf,
  city,
  neighborhood,
  street,
  complement,
  number,
  reference,
  email,
  password
) {
  return {
    type:'@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      cpf,
      cep,
      numberphone,
      uf,
      city,
      neighborhood,
      street,
      complement,
      number,
      reference,
      email,
      password },
  };
}

export function signUpRequestPro(
  name,
  lastname,
  specialty,
  city,
  number,
  email,
  password,
  record,
  description,
) {
  return {
    type:'@auth/SIGN_UP_REQUEST_PRO',
    payload: {
      name,
      lastname,
      specialty,
      city,
      number,
      email,
      password,
      record,
      description },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}