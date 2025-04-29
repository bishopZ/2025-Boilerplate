import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { decrypt } from '@/common/encryption';
import { LOCAL_STORAGE_ID } from '@/common/constants';

// with a complicated state object, we'll want to define
// the schema version so we can handle migrations.
enum SchemaVersion {
  Initial = 0,
}

interface Key {
  key: string;
}

export const defaultState = {
  schemaVersion: 0 as SchemaVersion,
  score: 0,
  encryptionKey: null as string | null,
  loading: false,
  error: null as string | null,
};

// Infer Type from defaultState
export type PlayerState = typeof defaultState;

// After authentication, the `initPlayer` action requests
// the encryption key from the server and decrypts the stored state.
export const initPlayer = createAsyncThunk(
  'player/initPlayer', // namespace
  async () => {
    try {
      const response = await fetch('/key');
      if (!response.ok) {
        console.error('Failed to fetch player data: HTTP error', response.status);
        return { encryptionKey: null };
      }
      const { key } = await response.json() as Key;
      const storedState = localStorage.getItem(LOCAL_STORAGE_ID) ?? null;

      if (!storedState) return { encryptionKey: key };

      const decrypted = decrypt(storedState, key);
      const result = JSON.parse(decrypted) as PlayerState;

      return { ...result, encryptionKey: key };
    } catch (error) {
      console.error('Failed to fetch player data: Network error', error);
    }
  }
);

// Player actions that don't require async.
export const playerActions = {
  increment: (state: PlayerState) => {
    state.score += 1;
  },
  decrement: (state: PlayerState) => {
    state.score -= 1;
  },
  incrementByAmount: (state: PlayerState, action: PayloadAction<number>) => {
    state.score += action.payload;
  }
};
