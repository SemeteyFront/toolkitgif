import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tranding from './Tranding'
import random from './Random'
import categories from './Categories'
import search from "./Search";

const rootReducer = combineReducers({
  tranding,
  random,
  categories,
  search
})

export const store = configureStore({
  reducer: rootReducer
})