import UserPhone from '../models/UserPhone';
import User from '../models/User';

class UserPhoneController {
  async store(req, res) {
    const { user_id } = req.params;
    const { phone } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({error: 'User not found'});
    }

    const userPhone = await UserPhone.create({
      phone,
      user_id,
    });

    return res.json(userPhone);
}
};

export default new UserPhoneController();