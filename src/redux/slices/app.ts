import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    errorMessage: {text: string; type: string} | null,
    lang: string;
    dir: string;
}

export const initialState: AppState = {
    errorMessage: null,   
    lang: "en",
    dir: "ltr"
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<Partial<AppState>>) => { 
        return { ...state, ...action.payload }
    },
    resetApp: (state) => {
      return {
        ...state,
        errorMessage: null,
      };
    },
  },
})

export const { updateApp, resetApp } = appSlice.actions
export default appSlice.reducer
