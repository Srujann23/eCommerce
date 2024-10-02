import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/admin_assets/assets';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle link click
    const handleLinkClick = () => {
        if (window.innerWidth < 768) { // Adjust this value based on your breakpoint
            setIsOpen(false); // Close the sidebar on small screens
        }
    };

    return (
        <div className="relative">
            {/* Toggle Button for Small Screens */}
            <button
                className="md:hidden p-2 bg-gray-800 text-white rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close' : '☰'} {/* Hamburger icon for toggle */}
            </button>

            {/* Sidebar */}
            <div 
                className={`fixed inset-y-0 left-0 bg-white shadow-md transition-transform transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 md:relative md:w-[250px] min-h-screen border-r-2`} // Set a fixed width for the sidebar in full screen
            >
                <div className='flex flex-col gap-4 pt-6 pl-5 text-[15px]'>
                    <NavLink 
                        className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' 
                        to="/add"
                        onClick={handleLinkClick}
                    >
                        <img className='w-5 h-5' src={assets.add_icon} alt="Add Items" />
                        <p>Add Items</p>
                    </NavLink>
                    <NavLink 
                        className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' 
                        to="/list"
                        onClick={handleLinkClick}
                    >
                        <img className='w-5 h-5' src={assets.order_icon} alt="List Items" />
                        <p>List Items</p>
                    </NavLink>
                    <NavLink 
                        className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' 
                        to="/orders"
                        onClick={handleLinkClick}
                    >
                        <img className='w-5 h-5' src={assets.order_icon} alt="Orders" />
                        <p>Orders</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
