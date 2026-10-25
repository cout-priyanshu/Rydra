import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@/models/user.model'

// Define a type for the slice state
interface IuserState {
  userData: IUser | null
}

// Define the initial state using that type
const initialState: IuserState = {
  userData: null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData:(state,action)=>{
        state.userData=action.payload
    }
  }
})

export const { setUserData } = userSlice.actions


export default userSlice.reducer