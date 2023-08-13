import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  name: 'juntao',
  sex: 'man'
}

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeSex: (state, action: PayloadAction<'man' | 'woman'>) => {
      state.sex = action.payload
    }
  }
})

export const { changeName, changeSex } = otherSlice.actions

export default otherSlice.reducer
