import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Footer/>
      <Body/>
    </div>
  )
}

export default App