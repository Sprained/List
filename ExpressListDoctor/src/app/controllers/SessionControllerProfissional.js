import jwt from 'jsonwebtoken';
import Profissional from '../models/Profissionais';


class SessionControllerProfissional {
  async store(req, res) {
    const { email, password } = req.body;

    const professional = await Profissional.findOne({ where: { email }});

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
      return res.status(401).json({ error: 'O campo email é obrigatório'});
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
      return res.status(401).json({ error: 'O campo senha é obrigatório'});
    }

    if(!professional || professional.disabled == true) {
      return res.status(401).json({error: 'Usuário não encontrado'});
    }

    if(!professional) {
      return res.status(401).json({ error: 'Usuário não encontrado'});
    }

    if(!(await professional.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta'});
    }

    const { id, name, lastname, specialty, city, number, record, description } = professional;

    return res.json({
      professional: {
        id,
        name,
        lastname,
        email,
        specialty,
        city,
        number,
        record,
        description
      },
      token: jwt.sign({ id }, 'bd0aa14031b45f8a86d98f3c2a11dde1', {
        expiresIn: '7d',
      }),
    })
  }
}

export default new SessionControllerProfissional();