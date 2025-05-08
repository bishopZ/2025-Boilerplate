import { BASE } from '../common/constants';
import express from 'express';
import ViteExpress from 'vite-express';
import session from 'express-session';
import { ensureAuthenticated, setupAuthentication } from './authentication';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import path from 'path';

declare module 'express-session' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  export interface SessionData {
    // Use this interface to add custom properties to the session
    // csrfToken: string;
    // loginAttempts: number;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_PORT = '3000';

const setupMiddleware = (app: express.Application) => {
  app.set('trust proxy', 1); // trust first proxy
  app.set('view engine', 'ejs');
  app.engine('html', (path, data, cb) => {
    ejs.renderFile(path, data, {}, (err, str) => {
      if (err) {
        cb(err);
        return undefined;
      }
      cb(null, str);
    });
  });
  app.set('views', `${__dirname}/pages`);
  app.use(express.static(`${__dirname}/public`));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(session({
    secret: process.env.SESSION_SECRET ?? 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    },
  }));
};

const setupRoutes = (app: express.Application) => {
  // page routes
  app.get('/', ensureAuthenticated, (_, __, next) => {
    next(); // pass to Vite
  });

  // API routes
  app.get('/key', ensureAuthenticated, (_, res) => {
    res.send({ key: process.env.LOCAL_STORAGE_KEY });
  });
};

const startServer = () => {
  const app = express();

  setupMiddleware(app);
  setupAuthentication(app);
  setupRoutes(app);

  const port = parseInt(process.env.PORT ?? DEFAULT_PORT, BASE);
  const displayPort = new Intl.NumberFormat('en-US', {
    useGrouping: false,
  }).format(port);

  ViteExpress.listen(app, port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `${process.env.NODE_ENV ?? ''} Server is listening on ${displayPort}.`
    );
  });
};

startServer(); // Start the server
