import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Trackpage from "./components/Trackpage/Trackpage.jsx";
function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element = {<Home/>}/>
                  <Route path = '/home' element = {<Home/>}/>
                  <Route path = '/track' element = {<Trackpage/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
