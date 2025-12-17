import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RecentTool {
  id: string
  name: string
  path: string
  lastUsed: number
}

interface RecentToolsState {
  tools: RecentTool[]
}

const initialState: RecentToolsState = {
  tools: [],
}

const recentToolsSlice = createSlice({
  name: 'recentTools',
  initialState,
  reducers: {
    addRecentTool: (state, action: PayloadAction<Omit<RecentTool, 'lastUsed'>>) => {
      const existingIndex = state.tools.findIndex((t) => t.id === action.payload.id)
      if (existingIndex !== -1) {
        state.tools.splice(existingIndex, 1)
      }
      state.tools.unshift({ ...action.payload, lastUsed: Date.now() })
      // Keep only last 10
      if (state.tools.length > 10) {
        state.tools.pop()
      }
    },
    clearRecentTools: (state) => {
      state.tools = []
    },
  },
})

export const { addRecentTool, clearRecentTools } = recentToolsSlice.actions
export default recentToolsSlice.reducer
