import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
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
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
    }
})

export const contactReducer = contactSlice.reducer;

export const actions = contactSlice.actions;

export const contactSelector = (state) => state.contactReducer;