import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
  )
}

export default App