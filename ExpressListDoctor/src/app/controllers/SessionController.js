import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';


class SessionController {
  async store(req, res) {
    
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
      return res.status(401).json({ error: 'O campo email é obrigatório'});
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
      return res.status(401).json({ error: 'O campo senha é obrigatório'});
    }

    if(!user || user.disabled == true) {
      return res.status(401).json({error: 'Usuário não encontrado'});
    }

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha errada'});
    }

    const { id, name, cep, city, uf, neighborhood, street, number, reference, complement, numberphone } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        cep,
        city,
        uf, 
        neighborhood, 
        street, 
        number, 
        reference,
        complement,
        numberphone
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController();