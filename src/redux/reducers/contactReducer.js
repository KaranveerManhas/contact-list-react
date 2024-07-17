// Import necessary functions from Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the initial state for the contact slice
const initialState = {
    contacts: [],
    tempContacts: [],
    loading: true,
    error: null
}

// Create an async thunk for fetching contacts
export const fetchContacts = createAsyncThunk(
    "contact/fetchContacts",
    async (arg, thunkAPI) => {
        try {
            // Fetch contacts from an API
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            return data;
        } catch (error) {
            // Handle errors by rejecting the thunk with an error message
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// Create an async thunk for adding a contact
export const addContact = createAsyncThunk(
    "contact/addContact",
    async (contact, thunkAPI) => {
        try {
            // Send a POST request to add a new contact
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Combine the API response with the original contact data
            const contactDetails = { ...data, ...contact };

            return contactDetails;
        } catch (error) {
            // Handle errors by rejecting the thunk with an error message
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// Create an async thunk for updating a contact
export const updateContact = createAsyncThunk(
    "contact/updateContact",
    async (contact, thunkAPI) => {
        try {
            console.log(contact, "Function reached here");
            // Send a PUT request to update the contact
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact) // Add this line to include the body in the PUT request
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Combine the updated contact data
            const updatedContact = { ...contact };

            return updatedContact;
        } catch (error) {
            // Handle errors by rejecting the thunk with an error message
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// Create an async thunk for deleting a contact
export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (id, thunkAPI) => {
        try {
            // Send a DELETE request to remove the contact
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return id;
        } catch (error) {
            // Handle errors by rejecting the thunk with an error message
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// Create a slice for the contact state
const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Handle pending state for fetching contacts
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.loading = true;
            })
            // Handle fulfilled state for fetching contacts
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = [...state.tempContacts, ...action.payload];
            })
            // Handle rejected state for fetching contacts
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Handle fulfilled state for adding a contact
            .addCase(addContact.fulfilled, (state, action) => {
                state.tempContacts.push(action.payload);
                state.contacts.unshift(action.payload);
            })
            // Handle fulfilled state for updating a contact
            .addCase(updateContact.fulfilled, (state, action) => {
                console.log(action.payload);
                const updatedContacts = state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact);
                state.contacts = updatedContacts;
                state.tempContacts = updatedContacts;
            })
            // Handle fulfilled state for deleting a contact
            .addCase(deleteContact.fulfilled, (state, action) => {
                const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload);
                state.contacts = updatedContacts;
                state.tempContacts = updatedContacts;
            });
    }
})

// Export the contact reducer to be used in the store
export const contactReducer = contactSlice.reducer;

// Selector to access the contact state
export const contactSelector = (state) => state.contactReducer;
