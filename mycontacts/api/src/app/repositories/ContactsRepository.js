import { v4 as uuid } from 'uuid';

let contacts = [
  {
    id: uuid(),
    name: 'Enrico',
    email: 'dev@enrico.gg',
    phone: '14123456789',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'John',
    email: 'dev@john.gg',
    phone: '14123456789',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

export default new ContactsRepository();
