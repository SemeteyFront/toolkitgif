import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url, api_key } from "./api";

export const categoriesActions = createAsyncThunk(
  'categoeis/categoriesActions',
  async function(_, {rejectWithValue}) {
    try {
      const res = await fetch(`${url}/categories?api_key=${api_key}`)
      if(!res.ok) {
        throw new Error('Server Error')
      }
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: {
    categName: [],
    status: null,
    error: null
  },
  extraReducers: {
    [categoriesActions.pending]:(state) => {
      state.status = 'pending'
      state.error = null
    },
    [categoriesActions.fulfilled]:(state, action) => {
      state.status = 'resolved'
      state.categName = action.payload
    },
    [categoriesActions.rejected]:(state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export default categoriesReducer.reducer