// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/assets';

export const cryptoStore = () => {
  return configureStore({
    reducer: {
      crypto: cryptoReducer,
    },
  })
};

// export type RootState = ReturnType<typeof cryptoStore.getState>;
// export type AppDispatch = typeof cryptoStore.dispatch;
export type AppStore = ReturnType<typeof cryptoStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
