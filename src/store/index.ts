import { combineReducers, configureStore } from '@reduxjs/toolkit'
import testSlice from '@/store/slice/testSlice'
import logger from 'redux-logger'

const reducer = combineReducers({
  other: testSlice
})

const store = configureStore({
  reducer,
  middleware: [logger],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
