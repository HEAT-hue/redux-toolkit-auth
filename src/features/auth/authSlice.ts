import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state
interface AuthStateType {
    user: string | null
    token: string | null
}

// Define the interface for the action
interface PayloadType {
    user: string | null
    accessToken: string | null
}

// Create the initial state
const initialState: AuthStateType = {
    user: null,
    token: null
}

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<PayloadType>) => {
            const { user, accessToken } = action.payload;
            state.user = user
            state.token = accessToken
        },
        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})

// Export auth Slice reducer
export const authReducer = authSlice.reducer;

// Export auth slice actions
export const authActions = authSlice.actions;