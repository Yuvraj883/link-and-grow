// import { Button } from '@mui/material'
import Navbar from './Components/Navbar'
import TextContentGeneration from './Pages/TextContentGeneration'
import PostGeneration from './Pages/PostGeneration'
import LeftBar from './Components/LeftBar'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <LeftBar />
        <PostGeneration />
      </div>

      
    </>
  )
}

export default App
