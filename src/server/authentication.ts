import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import crypto from 'crypto';
import type { Application, RequestHandler } from 'express';

// encryption parameters
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';
const LOGIN_PATH = '/login';

// SEO metadata for the login page
const SEO = {
  title: '2025 Boilerplate',
  author: 'BishopZ',
  description: 'A local-first boilerplate for 2025',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1365px-African_Bush_Elephant.jpg',
  url: 'https://github.com/bishopz/2025-boilerplate',
} as const;

// get this from the database
const fakeUser = {
  name: 'Alice',
  email: 'test',
  // hashed value of the password 'test', with salt 'salt123ABC', 100000 iterations
  password: 'a12de93955d83d00dda97797538cebf8b83224ff6d439e36fac2747c923948b7cb5b69c9ac32ec9cdb38c2ed78a2c734d2c36cbc37b27a952d6e365c3945191c',
  salt: 'salt123ABC',
};

type HashFunction = (password: string, salt: string, iterations?: number) => string;

const hashPassword: HashFunction = (password, salt) => {
  return crypto
    .pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString('hex');
};

export const setupAuthentication = (app: Application) => {
  app.use(passport.authenticate('session'));

  passport.use(new LocalStrategy((username, password, callback) => {
    const user = fakeUser; // get user from database
    if (username !== user.email) {
      callback(null, false, { message: 'Incorrect username or password.' });
      return undefined;
    }

    const hashedPassword = hashPassword(password, user.salt);
    if (user.password !== hashedPassword) {
      callback(null, false, { message: 'Incorrect username or password.' });
      return undefined;
    }
    callback(null, user);
  }));

  // passport requires defining these methods
  passport.serializeUser((user: Express.User, done) => { done(null, user) });
  passport.deserializeUser((user: Express.User, done) => { done(null, user) });

  app.get(LOGIN_PATH, (_, res) => {
    res.render('login', { SEO }); // render the login page
  });

  app.post('/login/password', (req, res, next) => {
    passport.authenticate('local', (error: unknown, user: Express.User | false) => {
      if (error) {
        next(error);
        return undefined;
      }
      if (!user) {
        res.redirect(LOGIN_PATH);
        return undefined;
      }

      req.logIn(user, error => {
        if (error) {
          next(error);
          return undefined;
        }
        res.redirect('/'); // redirect to the home page
      });
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout(error => {
      if (error) {
        return res.status(500).send('Logout failed');
      }
      res.redirect(LOGIN_PATH);
    });
  });
};

// Middleware to ensure the user is authenticated
export const ensureAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return undefined;
  }
  res.redirect(LOGIN_PATH);
};
