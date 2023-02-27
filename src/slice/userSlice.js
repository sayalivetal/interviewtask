import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    publicData: [],
    privateData: [],
  },
  reducers: {
    login: (state, action) => {
      return {
        userDetails: {
          ...action.payload,
        },
      };
    },
    userLoginData: (state, action) => {
      console.log(action.payload);
      if (action?.payload?.data == "public") {
        if (!state.publicData) {
          return { ...state, publicData: [action?.payload] };
        } else {
          return {
            ...state,
            publicData: [...state.publicData, action?.payload],
          };
        }
      } else {
        if (!state.privateData) {
          return {
            ...state,
            privateData: [action?.payload],
          };
        } else {
          return {
            ...state,
            privateData: [...state.privateData, action?.payload],
          };
        }
      }
    },
  },
});

export const { login, userLoginData } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;
