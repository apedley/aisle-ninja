import express from 'express';
const router = express.Router();
import recipeController from '../controllers/recipes_controller';
import passportService from '../utils/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', requireAuth, recipeController.create);
router.get('/', recipeController.list);
router.get('/:id', recipeController.show);
router.delete('/:id', requireAuth, recipeController.delete);
router.put('/:id', requireAuth, recipeController.update);
router.patch('/:id', requireAuth, recipeController.patch);

router.get('/:id/ingredients', recipeController.listIngredients);
router.post('/:id/ingredients', requireAuth, recipeController.addIngredient);
router.delete('/:id/ingredients/:ingredientId', requireAuth, recipeController.removeIngredient);

export default router;