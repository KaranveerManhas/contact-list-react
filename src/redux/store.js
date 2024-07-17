// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the contactReducer from the local reducers directory
import { contactReducer } from './reducers/contactReducer';

// Configure and create the Redux store
export const store = configureStore({
    // Define the reducer for the store
    reducer: {
        contactReducer // Attach the contactReducer to the store
    }
})
