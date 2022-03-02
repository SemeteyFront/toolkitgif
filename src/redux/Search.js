import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { url, api_key } from "./api";


export const SearchAction = createAsyncThunk(
  'random/randomAction',
  async function(name, {rejectWithValue}) {
    try {
      const res = await fetch(`${url}/search?api_key=${api_key}}&q=${name}&limit=20&offset=0&rating=g&lang=en`)
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


const SearhReducer = createSlice({
  name: 'search',
  initialState: {
    searchData: [],
    status: null,
    error: null,
    name: ''
  },
  extraReducers: {
    [SearchAction.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [SearchAction.fulfilled]: (state, action) => {
      state.searchData = action.payload
      state.status = 'resolved'
      state.name = action.name
    },
    [SearchAction.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export default SearhReducer.reducer
