const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  // List
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    return response.json(categories);
  }

  // Find

  // Create
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'You must inform a name to proceed.' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  // Update

  // Delete
}

module.exports = new CategoryController();
