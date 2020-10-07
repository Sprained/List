import Sequelize, { Model } from 'sequelize';

class UserPhone extends Model {
  static init(sequelize) {
    super.init({
      phone: Sequelize.STRING
    },
    {
      sequelize,
    }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
  }
}

export default UserPhone;