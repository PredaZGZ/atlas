import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

store.subscribe(() => {
  console.log('Store updated: ', store.getState());
});

export default store