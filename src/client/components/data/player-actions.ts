import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { decrypt } from '@/common/encryption';
import { STORAGE_KEY } from '@/common/constants';

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

export type PlayerState = typeof defaultState;

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
      const storedState = localStorage.getItem(STORAGE_KEY) ?? null;

      if (!storedState) return { encryptionKey: key };

      const decrypted = decrypt(storedState, key);
      const result = JSON.parse(decrypted) as PlayerState;

      return { ...result, encryptionKey: key };
    } catch (error) {
      console.error('Failed to fetch player data: Network error', error);
    }
  }
);

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
