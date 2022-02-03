import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface People {
  people: string[]
  addPerson: (person: string) => void
  removePerson: (person: string) => void
}

const usePeopleStore = create<People>(
  devtools(
    (set) => ({
      people: ['John Doe', 'Jane Doe'],
      addPerson: (person: string) =>
        set(
          (state) => ({
            people: [...state.people, person],
          }),
          false,
          'addPerson'
        ),
      removePerson: (person: string) =>
        set(
          (state) => ({
            people: state.people.filter((people) => people !== person),
          }),
          false,
          'removePerson'
        ),
    }),
    { anonymousActionType: 'peopleActionStore' }
  )
)

export default usePeopleStore
