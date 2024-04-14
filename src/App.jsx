import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Trackpage from "./components/Trackpage/Trackpage.jsx";
import SignUp from "./SignUp.jsx"
import Login from "./Login.jsx"
function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element = {<Home/>}/>
                  <Route path = '/home' element = {<Home/>}/>
                  <Route path = '/track' element = {<Trackpage/>}/>
                  <Route path = '/register' element = {<SignUp/>}/>
                  <Route path = '/login' element = {<Login/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
