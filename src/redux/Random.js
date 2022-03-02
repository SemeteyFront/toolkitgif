import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url, api_key } from "./api";

export const randomAction = createAsyncThunk(
  'random/randomAction',
  async function(_, {rejectWithValue}) {
    try {
      const res = await fetch(`${url}/random?api_key=${api_key}&tag=&rating=g`)
      if(!res.ok) {
        throw new Error('Server Error')
      }
      const data = await res.json()
      console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const randomReducer = createSlice({
  name: 'random',
  initialState: {
    datas: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [randomAction.pending]: (state) => {
      state.state = 'pending'
      state.error = null
    },
    [randomAction.fulfilled]: (state, action) => {
      state.datas = action.payload
      state.status = 'resolved'
    },
    [randomAction.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'rejected'
    }
  }
})

export default randomReducer.reducer