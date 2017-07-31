import express from 'express';
const router = express.Router();
import ingredientsController from '../controllers/ingredients_controller';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', requireAuth, ingredientsController.create);
router.get('/', ingredientsController.list);
router.get('/:id', ingredientsController.show);
router.delete('/:id', requireAuth, ingredientsController.delete);
router.put('/:id', requireAuth, ingredientsController.update);
router.patch('/:id', ingredientsController.patch);

export default router;