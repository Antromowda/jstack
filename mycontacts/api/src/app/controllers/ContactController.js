import ContactsRepository from '../repositories/ContactsRepository.js';

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.status(200).json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found.' });
    }

    return response.status(200).json(contact);
  }

  async store() {

  }

  async update() {

  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found.' });
    }

    await ContactsRepository.delete(id);

    return response.status(200).json({ message: 'Contact was deleted successfuly.' });
  }
}

export default new ContactController();
