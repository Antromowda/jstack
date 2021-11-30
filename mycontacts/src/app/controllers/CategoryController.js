const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  // List
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    return response.json(categories);
  }

  // Find
  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' });
    }

    return response.json(category);
  }

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
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);
    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found.' });
    }

    if (!name) {
      return response.status(400).json({ error: 'You must informa a category name.' });
    }

    const category = await CategoriesRepository.update(id, { name });

    return response.json(category);
  }

  // Delete
  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
