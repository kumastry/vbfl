import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cardsReducer from '../slices/cardSlice';
import { save, load } from 'redux-localstorage-simple';
import { get } from 'http';

export default configureStore({
  reducer: {
    cards:cardsReducer
  },

  preloadedState: load(),
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(save()),
});

