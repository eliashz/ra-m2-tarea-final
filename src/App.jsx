import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout'
import { FrontPage, Datos, MiPerfil } from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} exact />
        <Route path="/datos" element={<Datos />} />
        <Route path="/perfil" element={<MiPerfil />} />
      </Routes>
    </Router>
  )
}

export default App
