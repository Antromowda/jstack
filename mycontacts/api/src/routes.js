import { Router } from 'express';

import ContactController from './app/controllers/ContactController.js';

const router = Router();

// #region - Contacs
router.post('/contacts', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.get('/contacts', ContactController.index);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);
// #endregion - Contacs

export default router;
