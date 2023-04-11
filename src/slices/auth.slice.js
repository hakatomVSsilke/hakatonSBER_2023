import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token        : null,
    userId       : null,
    refreshToken : null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state) => {
            console.log(state, 'login')
        },
        logout: (state) => {
            console.log(state, 'logout')
        },
        getUserId: (state) => {
            console.log(state, 'getUserId')
        }
    }
});

export const {login, logout, getUserId} = authSlice.actions;

export default authSlice.reducer;