import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router-dom'; // Outlet renders child routes
import './App.css';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleClick = (link) => navigate(link);

    return (
        <div className="flex flex-col h-screen">
            {/* AppBar */}
            <div className="APPBAR">
                <MenuIcon
                    className="MENU_ICON"
                    onClick={toggleSidebar}
                />
                <h1>BudgetWise</h1>
            </div>

            <div className="flex flex-grow">
                {/* Sidebar */}
                <ul className={`sidebar ${isSidebarOpen ? 'slide-in' : 'slide-out'}`}>
                    {Sidebar.map((val, key) => (
                        <li
                            key={key}
                            className="p-3 cursor-pointer hover:bg-gray-700 flex items-center gap-2"
                            onClick={() => handleClick(val.link)}
                        >
                            {val.icon} {val.title}
                        </li>
                    ))}
                </ul>

                {/* Main Content (Dynamic Content Here) */}
                <div className="flex-grow p-6 bg-gray-100 main-content">
                    <Outlet />  {/* Renders the current route's content */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
