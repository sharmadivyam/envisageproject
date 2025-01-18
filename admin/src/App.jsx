import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Student from "./pages/student.jsx"
import Admin from './pages/admin.jsx'

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="flex gap-4 justify-center items-center min-h-screen">
      <button 
        onClick={() => navigate('/admin')}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Admin Portal
      </button>
      <button
        onClick={() => navigate('/student')}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Student Portal
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
