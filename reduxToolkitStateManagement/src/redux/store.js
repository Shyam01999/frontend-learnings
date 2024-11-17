
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
    }
})

export default store;