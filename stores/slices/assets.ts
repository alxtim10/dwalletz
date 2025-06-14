// store/slices/exampleSlice.ts
import { initial_market_data } from '@/constants';
import { CryptoAsset, UserAsset } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface AssetState {
  assets: UserAsset[]
}

const initialState: AssetState = {
  assets: initial_market_data
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets(state, action: PayloadAction<UserAsset[]>) {
      state.assets = action.payload;
    },
    addAsset(state, action: PayloadAction<UserAsset>) {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        let existing = state.assets[index];
        existing.amount += action.payload.amount;
      } else {
        state.assets.push(action.payload);
      }
    },
    updateAsset(state, action: PayloadAction<{amount: number, id: string}>) {
      const index = state.assets.findIndex(asset => asset.id == action.payload.id);
      state.assets[index].amount -= action.payload.amount;
    },
    removeAsset(state, action: PayloadAction<string>) {
      state.assets = state.assets.filter(asset => asset.id !== action.payload);
    },
    clearAssets(state) {
      state.assets = [];
    },
  },
});

export const { setAssets, addAsset, updateAsset, removeAsset, clearAssets } = cryptoSlice.actions;
export const selectAssets = (state: AssetState) => state.assets
export default cryptoSlice.reducer;
