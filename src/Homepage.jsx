import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'; // Import your CSS file

const Homepage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
                <ul className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
                    {Sidebar.map((val, key) => (
                        <li key={key} className="p-3 cursor-pointer hover:bg-gray-700 flex items-center gap-2">
                            {val.icon} {val.title}
                        </li>
                    ))}
                </ul>

                {/* Main Content */}
                <div className="flex-grow p-6 bg-gray-100">
                    <h2 className="text-3xl">hello</h2>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
