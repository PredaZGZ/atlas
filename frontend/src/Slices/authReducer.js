import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name : "",
    email : "",
  }, 
  userToken: null, 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName : (state, action) => {
      state.user.name = action.payload;
    },
    setEmail : (state, action) => {
      state.user.email = action.payload;
    },
    setToken : (state, action) => {
      state.userToken = action.payload;
    },
    setLogout : (state) => {
      state.user = {
        name : "",
        email : "",
      } 
      state.userToken = null
      sessionStorage.clear()
    },
    setLogin : (state, action) => {
      state.user = {
        name : action.payload.name,
        email : action.payload.email,
      } 
      state.userToken = action.payload.token,
      sessionStorage.setItem('token', action.payload.token)
    },
  }
})

export const { setName, setEmail, setToken, setLogout, setLogin } = authSlice.actions;
export default authSlice.reducer;