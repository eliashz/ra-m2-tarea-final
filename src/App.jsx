import { Header } from './components/layout'
import { FrontPage, Datos, MiPerfil } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} exact />
          <Route path="/datos" element={<Datos />} />
          <Route path="/perfil" element={<MiPerfil />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
