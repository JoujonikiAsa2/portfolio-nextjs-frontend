import { configureStore } from '@reduxjs/toolkit'
import themeSliceReducer from '@/lib/theme/themeSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        theme:themeSliceReducer
    }
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']