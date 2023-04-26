import { PageHome } from './Pages/Home'
import { PageAbout } from './Pages/About'
import { PageSkills } from './Pages/Skills'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='about' element={<PageAbout />} />
        <Route path='skills' element={<PageSkills />} />
      </Routes>
    </>
  )
}

export default App
