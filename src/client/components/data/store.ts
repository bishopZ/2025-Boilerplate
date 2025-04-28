import { configureStore, Middleware } from '@reduxjs/toolkit';
import playerReducer from './player';
import { encrypt } from '@/common/encryption';
import { PlayerState } from './player-actions';
import { STORAGE_KEY } from '@/common/constants';

export type GenericObject = Record<string, unknown>;

interface LocalState {
  player: PlayerState
}

const saveToLocalStorage: Middleware<GenericObject, LocalState> = storeAPI => next => action => {
  setTimeout(() => {
    try {
      const { player } = storeAPI.getState();
      const { encryptionKey } = player;
      if (encryptionKey) {
        const encryptedState = encrypt(JSON.stringify(player), encryptionKey);
        if (encryptedState) {
          localStorage.setItem(STORAGE_KEY, encryptedState);
        } else {
          console.error('Failed to encrypt state');
        }
      }
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  }, 0);
  return next(action);
};

export const store = configureStore({
  reducer: {
    player: playerReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(saveToLocalStorage),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
