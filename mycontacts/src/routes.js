const { Router } = require('express');

const router = Router();

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

// #region - Contacts
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
// #endregion

// #region - Category
router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

// #endregion

module.exports = router;
