import express from 'express';
const router = express.Router();
import Authentication from '../controllers/authentication_controller';
import passport from 'passport';

const requireSignin = passport.authenticate('local', { session: false });

router.post('/api/signin', requireSignin, Authentication.signin);
router.post('/api/signup', Authentication.signup);


module.exports = router;