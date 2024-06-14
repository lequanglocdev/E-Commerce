import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  createUser:null,
  error: null,
  loading: false,
  token:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state) =>{
          state.loading = true
          state.error = null
        },
        loginSuccess:(state,action) =>{
          state.createUser = action.payload
          state.token = action.payload
          state.loading= false
          state.error = null
        },
        loginError:(state,action) =>{
          state.loading = false
          state.error = action.payload
        },
       
        logoutSuccess: (state) => {
          state.createUser = null;
          state.error = null;
          state.loading = false;
        },
    }
})

export const {loginStart,loginSuccess,loginError,logoutSuccess} = userSlice.actions
export default userSlice.reducer