import crypto from 'crypto';
import { ITERATIONS, KEY_LENGTH, DIGEST } from '../config/constants';

// This would typically come from a database
export const fakeUser = {
  name: 'Alice',
  email: 'test',
  // hashed value of the password 'test', with salt 'salt123ABC', 100000 iterations
  password: 'a12de93955d83d00dda97797538cebf8b83224ff6d439e36fac2747c923948b7cb5b69c9ac32ec9cdb38c2ed78a2c734d2c36cbc37b27a952d6e365c3945191c',
  salt: 'salt123ABC',
};

type HashFunction = (password: string, salt: string) => string;

export const hashPassword: HashFunction = (password, salt) => {
  return crypto
    .pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString('hex');
};

export const verifyUser = (username: string, password: string) => {
  const user = fakeUser; // get user from database in production
  if (username !== user.email) {
    return null;
  }

  const hashedPassword = hashPassword(password, user.salt);
  if (user.password !== hashedPassword) {
    return null;
  }

  return user;
};

