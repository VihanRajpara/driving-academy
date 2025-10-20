import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignIn from './modules/login/SignIn';
import Dashboard from './modules/dashboard/Dashboard';
import MyProfile from './modules/myprofile/MyProfile';
import ProtectedRoute from './util/ProtectedRoute';
import CustomerTabs from './modules/customerprofile/CustomerTabs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/customer-profile" element={<CustomerTabs />} />
      </Route>

    </Routes>
  )
}

export default App