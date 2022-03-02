import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url, api_key } from "./api";

export const trandingAction = createAsyncThunk(
  'tranding/trandingAction',
  async function(counter, {rejectWithValue}) {
    try {
    const res = await fetch(`${url}/trending?api_key=${api_key}&limit=${counter}&offset=${counter}&rating=g`)
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


const trandingReducer = createSlice({
  name: 'tranding',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [trandingAction.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [trandingAction.fulfilled]: (state, action) => {
      state.todos = action.payload
      state.status = 'resolved'
    },
    [trandingAction.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'rejected'
    }
  }
})

export default trandingReducer.reducer