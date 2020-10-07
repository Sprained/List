import Office from '../models/Office';
import Profissional from '../models/Profissionais';

class OfficeController {
  async store(req, res) {
    try {
  
    const { name, cep, city, address } = req.body;

    const office = await Office.create({
      professional_id: req.professionalId,
      name,
      cep,
      city,
      address
    })

    return res.json(office);
  } catch(err) {
    console.log(err);
  }
  }
}

export default new OfficeController();