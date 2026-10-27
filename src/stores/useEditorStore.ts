import { create } from 'zustand'

interface EditorState {
  selectedNodeId: string | null
  sidebarOpen: boolean

  setSelectedNodeId: (id: string | null) => void
  toggleSidebar: () => void
}

export const useEditorStore = create<EditorState>((set) => ({
  selectedNodeId: null,
  sidebarOpen: true,

  setSelectedNodeId: (id) => {
    set({ selectedNodeId: id })
  },

  toggleSidebar: () => {
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    }))
  },
}))