
import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <div className='max-w-screen-2xl mx-auto'>
     <Header></Header>
      <Outlet></Outlet>
      
   </div>
  )
}

export default App
