import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      cep: Sequelize.STRING,
      uf: Sequelize.STRING,
      city: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      street: Sequelize.STRING,
      complement: Sequelize.STRING,
      number: Sequelize.STRING,
      reference: Sequelize.STRING,
      numberphone: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      disabled: Sequelize.BOOLEAN,
      passwordResetToken: Sequelize.STRING,
      passwordResetExpires: Sequelize.DATE,
      admin: Sequelize.BOOLEAN,
    },{
      sequelize
    });
    
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.UserPhone, { foreignKey: 'user_id', as: 'userPhone' });
  }
}

export default User;