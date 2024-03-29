import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout'
import { paths } from './constants'
import { Home, Datos, MiPerfil } from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={paths.home} element={<Home />} exact />
        <Route path={paths.data} element={<Datos />} />
        <Route path={paths.profile} element={<MiPerfil />} />
      </Routes>
    </Router>
  )
}

export default App
