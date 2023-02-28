import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    publicData: [],
    privateData: [],
    inDropZone: false, 
  },
  reducers: {
    login: (state, action) => {
      return {
        userDetails: {
          ...action.payload,
        },
      };
    },
    addToDropZone: (state,action) => {
    
      
    },
    userLoginData: (state, action) => {
     
      if (action?.payload?.data == "public") {
        if (!state.publicData) {
          return { ...state, publicData: [action?.payload?.name] };
        } else {
          return {
            ...state,
            publicData: [...state?.publicData, action?.payload.name],
          };
        }
      } else {
        if (!state.privateData) {
          return {
            ...state,
            privateData: [action?.payload?.name],
          };
        } else {
          return {
            ...state,
            privateData: [...state?.privateData, action?.payload.name],
          };
        }
      }
    },
  },
});

export const { login, userLoginData,addToDropZone } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;
