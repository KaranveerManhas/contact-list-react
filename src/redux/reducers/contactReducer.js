import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    tempContacts: [],
    loading: true,
    error: null
}

export const fetchContacts = createAsyncThunk(
    "contact/fetchContacts",
    async (arg, thunkAPI) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contact/addContact",
    async (contact, thunkAPI) => {
        try {
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
            
            const contactDetails = {...data, ...contact};
            
            return contactDetails;

            
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateContact = createAsyncThunk(
    "contact/updateContact",
    async (contact, thunkAPI) => {
        try {

            console.log(contact, "Function reached here");
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // const data = await response.json();
            
            const updatedContact = {...contact};
            
            return updatedContact;
            
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return id;
            
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = [...state.tempContacts, ...action.payload];
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.tempContacts.push(action.payload);
                state.contacts.unshift(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                console.log(action.payload);
                const updatedContacts = state.contacts.map(contact => contact.id === action.payload.id? action.payload : contact);
                state.contacts = updatedContacts;
                state.tempContacts = updatedContacts;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const updatedContacts = state.contacts.filter(contact => contact.id!== action.payload);
                state.contacts = updatedContacts;
                state.tempContacts = updatedContacts;
            })
            
    }
})

export const contactReducer = contactSlice.reducer;

export const actions = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer;