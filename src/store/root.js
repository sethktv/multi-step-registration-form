import { createSlice } from '@reduxjs/toolkit'


const root = createSlice({
    name: 'root',
    initialState: {
        auth: '',
        email: '',
        password: ''
    },
    reducers: {
        auth: (state, action) => { state.auth = action.payload},
        email: (state, action) => { state.email = action.payload},
        password: (state, action) => { state.password = action.payload},
    }
})

export const reducer = root.reducer
export const {auth, email, password} = root.actions