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
        login: (state, action ) => {
            console.log(action)
        },
        logout: (state, action ) => {
            console.log(state, 'logout')
        },
        getUserId: (state, action ) => {
            console.log(state, 'getUserId')
        },
        resetPassword: (state, action)  => {
            console.log(action)
        }
    }
});

export const {login, logout, getUserId} = authSlice.actions;

export default authSlice.reducer;