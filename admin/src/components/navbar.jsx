import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger-menu">
          <Menu size={24} />
        </button>
        <div className="nav-items">
          <Link
            to="/admin/manage"
            className={`nav-item ${activeTab === '/admin/manage' ? 'active' : ''}`}
            onClick={() => handleTabClick('/admin/manage')}
          >
            Manage Item
          </Link>
          <Link
            to="/admin/requests"
            className={`nav-item ${activeTab === '/admin/requests' ? 'active' : ''}`}
            onClick={() => handleTabClick('/admin/requests')}
          >
            Requests
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;