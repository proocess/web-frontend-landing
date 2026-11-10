import { useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { SOLUTIONS_LINK } from './data/catalog'
import EmpresaPage from './pages/EmpresaPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SolutionPage from './pages/SolutionPage'

function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    const samePage = previousPath.current === pathname
    previousPath.current = pathname

    if (hash) {
      // Scroll suave solo dentro de la misma página; desde otra, el salto es directo.
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])

  return null
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soluciones" element={<Navigate to={SOLUTIONS_LINK} replace />} />
        <Route path="/soluciones/:id" element={<SolutionPage />} />
        <Route path="/para-quien" element={<Navigate to="/para-quien/empresas" replace />} />
        <Route path="/para-quien/:id" element={<ProfilePage />} />
        <Route path="/empresa" element={<EmpresaPage />} />

        {/* URLs anteriores */}
        <Route path="/para-pymes" element={<Navigate to="/para-quien/empresas" replace />} />
        <Route path="/para-consultores" element={<Navigate to="/para-quien/implementadores" replace />} />
        <Route path="/sobre-nosotros" element={<Navigate to="/empresa" replace />} />
        <Route path="/faq" element={<Navigate to="/soluciones/capture" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
