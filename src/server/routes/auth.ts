import { Router } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getLogin, postLogin, getLogout } from '../controllers/auth';
import { verifyUser } from '../services/auth';
import { LOGIN_PATH } from '../config/constants';

const router = Router();

// Configure passport strategy
passport.use(new LocalStrategy((username, password, callback) => {
  const user = verifyUser(username, password);
  if (!user) {
    callback(null, false, { message: 'Incorrect username or password.' });
    return undefined;
  }
  callback(null, user);
}));

// Passport requires defining these methods
passport.serializeUser((user: Express.User, done) => { done(null, user) });
passport.deserializeUser((user: Express.User, done) => { done(null, user) });

// Define routes
router.get(LOGIN_PATH, getLogin);
router.post('/login/password', postLogin);
router.get('/logout', getLogout);

export default router;

