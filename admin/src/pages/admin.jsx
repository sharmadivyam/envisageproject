import Manage from './manage.jsx'
import Request from './requests.jsx'
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/navbar.jsx"

function Admin() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="manage" element={<Manage />} />
        <Route path="requests" element={<Request />} />
      </Routes>
    </>
  );
}

export default Admin;