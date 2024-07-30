import {createSlice,} from "@reduxjs/toolkit"


const initialState = {
  current:null,
  isLoggedIn:false,
  token:null,
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
          console.log("action",action)
          state.isLoggedIn = action.payload.isLoggedIn
          state.token = action.payload.token
          state.current = action.payload.userData
       
        },
        loginError:(state,action) =>{
          state.loading = false
          state.error = action.payload
        },
       
        logoutSuccess: (state) => {
          console.log(state)
          state.isLoggedIn = false;
          state.token = null
        },
    }
})

export const {loginStart,loginSuccess,loginError,logoutSuccess} = userSlice.actions
export default userSlice.reducer