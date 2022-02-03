import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Settings {
  dark: boolean
  toggleDarkMode: () => void
}

const useSettingsStore = create<Settings>(
  devtools(
    persist(
      (set) => ({
        dark: false,
        toggleDarkMode: () => set((state) => ({ dark: !state.dark }), false, 'toggleDarkmode'),
      }),
      { name: 'user_settings' }
    ),
    { anonymousActionType: 'settingActionStore' }
  )
)

export default useSettingsStore
