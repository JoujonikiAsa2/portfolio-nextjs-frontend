import { configureStore } from '@reduxjs/toolkit'
import themeSliceReducer from '@/lib/theme/themeSlice'
import menuSliceReducer from "@/lib/menu/menuSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
        theme:themeSliceReducer,
        menu:menuSliceReducer
    }
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']