import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignIn from './modules/login/SignIn';
import Dashboard from './modules/dashboard/Dashboard';
import MyProfile from './modules/myprofile/MyProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  )
}

export default App