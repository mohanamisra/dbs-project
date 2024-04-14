import {   useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp'

import Login from './Login'
import{BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

<Route path='/register' element={<SignUp/>}> </Route>
<Route path='/login' element={<Login/>}> </Route>



    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
