import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        loginData: {},
    },
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        loginData(state, actions) {
            state.loginData = actions.payload
        },
        logout(state) {
            state.isLogin = false;
        }
    }
})

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
});