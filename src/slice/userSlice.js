import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: [],
    publicData: [],
    privateData1: [],
    privateData2: [],
    inDropZone: false,
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        userDetails: [
          {
            email: "usera@system.com",
            password: "123456789",
          },
          {
            email: "userb@system.com",
            password: "123456789",
          },
        ],
      };
    },
    logout: (state, action) => {
      return {
      
      };
    },
   
    userLoginData: (state, action) => {
   

      if (
        action?.payload?.email == "usera@system.com" &&
        action.payload.data == "private"
      ) {
    
        if (!state.privateData1) {
          return { ...state, privateData1: [action?.payload?.name] };
        } else {
          return {
            ...state,
            privateData1: [...state?.privateData1, action?.payload.name],
          };
        }
      }

      if (
        action?.payload?.email == "userb@system.com" &&
        action.payload.data == "private"
      ) {
        if (!state.privateData2) {
          return { ...state, privateData2: [action?.payload?.name] };
        } else {
          return {
            ...state,
            privateData2: [...state?.privateData2, action?.payload.name],
           
          };
        }
      }
      if (
        action?.payload?.email == "usera@system.com" &&
        action?.payload?.position == "private"
      ) {
     
        if (!state.privateData1) {
          return {
            ...state,
            privateData1: [...action?.payload?.b],
            publicData: action?.payload?.a,
          };
        } else {
          return {
            ...state,
            privateData1: [...state.privateData1, ...action?.payload?.b],
            publicData: action?.payload?.a,
          };
        }
      }
      if (
        action?.payload?.email == "usera@system.com" &&
        action?.payload?.position == "public"
      ) {
        if (!state.privateData1) {
          return {
            ...state,
            privateData1: [...action?.payload?.a],
            publicData: [...state.publicData, ...action?.payload?.b],
          };
        } else {
          return {
            ...state,
            privateData1: [...action?.payload?.a],
            publicData: [...state.publicData, ...action?.payload?.b],
          };
        }
      }
      if (
        action?.payload?.email == "userb@system.com" &&
        action?.payload?.position == "private"
      ) {
        if (!state.privateData1) {
          return {
            ...state,
            privateData2: [...action.payload.b],
            publicData: action?.payload?.a,
          };
        } else {
          return {
            ...state,
            privateData2: [...state.privateData2, ...action.payload.b],
            publicData: action?.payload?.a,
          };
        }
      }
      if (
        action?.payload?.email == "userb@system.com" &&
        action?.payload?.position == "public"
      ) {
        if (!state.privateData1) {
          return {
            ...state,
            privateData2: [...action.payload.a],
            publicData: [...state.publicData, ...action?.payload?.b],
          };
        } else {
          return {
            ...state,
            privateData2: [...action.payload.a],
            publicData: [...state.publicData, ...action?.payload?.b],
          };
        }
      }

      if (action.payload.data == "public") {
        if (!state.publicData) {
          return {
            ...state,
            publicData: [action?.payload?.name],
          };
        } else {
          return {
            ...state,
            publicData: [...state?.publicData, action?.payload.name],
          };
        }
      }
    },
  },
});

export const { login, userLoginData, addToDropZone, logout } =
  UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;
