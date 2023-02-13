import { useEffect, useRef, useState } from 'react'
import './App.css'
import List from './components/List'
// import Form from './components/Form'
import {Sub, UserFromApi} from './types'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then((user: UserFromApi) => {
          setSubs(user.results)
      })

  }, [])

  // const handleNewSub = (newSub: Sub): void => {
  //   setSubs(subs => [...subs, newSub])
  // }

  return ( 
    <div className="app" ref={divRef}> 
      <h1 className='title'>Random User</h1> 
      <List subs={subs}/>
      {/* <Form onNewSub={handleNewSub}/> */}
    </div>
  )
}

export default App