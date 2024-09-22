import { useState } from 'react'
import Nav from './Components/Nav'
import Search from './Components/Search'
import Category from './Components/Category'
import Videos from './Components/Videos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='top-0 '>
      <div className='flex flex-row mt-[-32px] sticky z-0  top-0'>
      <Nav></Nav>
      <div className='w-full ml-[16px] top-0'>
      <Search></Search>
      </div>
    </div>
    <Category></Category>
    <Videos></Videos>
    </div>
  )
}

export default App
