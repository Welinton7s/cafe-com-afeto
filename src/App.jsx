import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Doacao from './pages/Doacao/Doacao'
import Sobre from './pages/Sobre/Sobre'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path='/sobre' element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
