import { useState } from 'react'

// Hook
export const useLocalStorage = (key: string, initialValue?: string) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const hasWindow = typeof window !== 'undefined'
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = hasWindow ? window.localStorage.getItem(key) : null
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: string | ((val: string) => string)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      hasWindow ? window.localStorage.setItem(key, JSON.stringify(valueToStore)) : null
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}
