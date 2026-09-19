import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  )
}

export default App