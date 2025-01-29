import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FrontPage from './components/FrontPage'
import SearchMyJobField from './components/SearchMyJobField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='max-w-screen-xl  justify-between mx-auto p-4'>
 <Header />
 <FrontPage />


    </div>
   
    </>
  )
}

export default App
