import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Loader from './pages/Loader'
import DashBoard from './pages/DashBoard'

function App() {


  return (
    <>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/l' element={<Loader/>}/>
      <Route exact path='/dash' element={<DashBoard/>}/>
     </Routes>
    </>
  )
}

export default App
