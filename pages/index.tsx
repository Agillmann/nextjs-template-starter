import React from 'react'
import usePeopleStore from '@stores/people'
import useSettingsStore from '@stores/settings'
import styled from '@emotion/styled'
import Link from 'next/link'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = {
  title: string
}

const Index = (props: Props) => {
  const { title } = props
  const { people, addPerson, removePerson } = usePeopleStore()
  const { dark, toggleDarkMode } = useSettingsStore()

  console.log(dark)
  React.useEffect(() => {
    console.log(people)
    setTimeout(() => {
      addPerson('toto')
      removePerson('John Doe')
      toggleDarkMode()
    }, 3000)
  }, [])
  return (
    <Div className="container">
      <h1>{title ? title : 'Hello'}</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Div>
  )
}

export default Index
