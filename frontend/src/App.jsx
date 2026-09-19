import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
<<<<<<< HEAD
import GetStarted from './pages/GetStarted'
=======
import StudentDashboard from './pages/StudentDashboard'
>>>>>>> origin/main

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
      <Route path="/get-started" element={<GetStarted />} />
=======
      <Route path="/student/dashboard" element ={<StudentDashboard />} />
>>>>>>> origin/main
    </Routes>
  )
}

export default App