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
      state.assets.push(action.payload);
    },
    updateAsset(state, action: PayloadAction<UserAsset>) {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
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
