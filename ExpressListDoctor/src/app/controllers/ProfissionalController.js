import Profissional from '../models/Profissionais';
import crypto from 'crypto';
import mailer from '../../modules/mailer';

class ProfissionalController {
  async store(req, res) {
    const userExists  = await Profissional.findOne({ where: { email: req.body.email } });

     
    if(!req.body.specialty || typeof req.body.specialty == undefined || req.body.specialty == null || req.body.specialty == "Selecionar") {
      return res.status(401).json({ error: 'O campo de Especialidade é obrigatório'});
    }
     
    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null) {
      return res.status(401).json({ error: 'O campo de Nome é obrigatório'});
    }

    if(!req.body.lastname || typeof req.body.lastname == undefined || req.body.lastname == null) {
      return res.status(401).json({ error: 'O campo de Sobrenome é obrigatório'});
    }

    if(!req.body.city || typeof req.body.city == undefined || req.body.city == null) {
      return res.status(401).json({ error: 'O campo de Cidade é obrigatório'});
    }

    if(!req.body.description || typeof req.body.description == undefined || req.body.description == null) {
      return res.status(401).json({ error: 'O campo de Descrição é obrigatório'});
    }

    if(!req.body.number || typeof req.body.number == undefined || req.body.number == null) {
      return res.status(401).json({ error: 'O número é obrigatório'});
    }

    if(req.body.number.length > 11 ) {
      return res.status(401).json({ error: 'A quantidade de número do telefone não pode ser maior que 11'});
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
      return res.status(401).json({ error: 'O email é obrigatório'});
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null) {
      return res.status(401).json({ error: 'A Senha é obrigatória'});
    }

    if(req.body.password.length < 6) {
      return res.status(401).json({ error: 'O campo senha tem que ter no mínimo 6 caracteres'});
    }

    if(!req.body.record || typeof req.body.record == undefined || req.body.record == null) {
      return res.status(401).json({ error: 'O número de registro é obrigatório'});
    }
    
    if(userExists) {
      return res.status(400).json({ error: 'User already exists'});
    }
    
    const {id, name, email}= await Profissional.create(req.body);
    
    return res.json({
      id,
      name,
      email
    });
  }

  async update(req, res) {
    
    const { email, oldPassword } = req.body;

    const professional = await Profissional.findByPk(req.professionalId);

    if(email !== professional.email) {
      const professionalExists  = await Profissional.findOne({ where: { email } });

      if(professionalExists) {
        return res.status(400).json({ error: 'Email já cadastrado'});
      }
    }

    if (oldPassword && !(await professional.checkPassword(oldPassword))) {
      return res.status(401).json({error: 'Senha antiga errada'});
    }

    if(oldPassword) {
    if(req.body.password !== req.body.confirmPassword) {
      return res.status(401).json({error: 'As senhas não batem'});
    }
    }

    if(oldPassword) {
    if(req.body.password.length < 6) {
      return res.status(401).json({ error: 'O campo senha tem que ter no mínimo 6 caracteres'});
    }
  }

    const { id, name, lastname, specialty, city, number, record, description  } = await professional.update(req.body);

    console.log(req.body);
    
    return res.json({
      id,
      name,
      lastname,
      email,
      specialty,
      city,
      number, 
      record, 
      description, 
    });
  }

  async delete(req, res) {
    const { disabled } = true;
    const professional = await Profissional.findByPk(req.professionalId);
    
    if(!professional) {
      return res.status(400).json({error: 'Professional not found'});
    }

    const {id, name} = await professional.update({disabled: true});

    return res.json({
      id,
      name,
      disabled
    })
  }

  async forgotPassword(req, res) {
    const { email } = req.body;

    try {
      const professional = await Profissional.findOne({ where: { email } });

      if(!professional) {
        return res.status(400).send({ error: 'Profissional não encontrado' });
      }

      const tokenn = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);
      
      if(professional) {
        const {id, name} = await professional.update({passwordResetToken: tokenn, passwordResetExpires: now,});
      }

      mailer.sendMail({
        to: email,
        from: 'anderson001749@gmail.com',
        template: 'auth/forgot_password',
        context: { tokenn },
      }, (err) => {
        if (err) {
          return res.status(400).send({ error: 'Cannot send forgot password email'});
        }
        return res.send();
      })


    } catch(err) {
      res.status(400).send({ error: 'Erro on forgot password, try again' });
    }
  }

  async resetPassword(req, res) {
    const { email, token, password } = req.body;

    try {
      const professional = await Profissional.findOne({ where: { email } });
      
      if(!professional) {
        return res.status(400).send({error: 'Profissional não encontrado'});
      }

      if(token !== professional.passwordResetToken) {
        return res.status(400).send({error: 'Token inválido'});
      }

      const now = new Date();

      if(now > professional.passwordResetExpires) {
        return res.status(400).send({error: 'Token expirado, gere um novo'});
      }

      professional.password = password;

      await professional.save();

      res.send();
    }catch(err) {
      res.status(400).send({error: 'Cannot reset password, try again later'})
    }
  }
}

export default new ProfissionalController();