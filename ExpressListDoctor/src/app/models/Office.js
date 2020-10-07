import Sequelize, { Model } from 'sequelize';

class Office extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cep: Sequelize.STRING,
      city: Sequelize.STRING,
      address: Sequelize.STRING,
    },{
      sequelize
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Profissionais, { foreignKey: 'professional_id' });
  }
}

export default Office;