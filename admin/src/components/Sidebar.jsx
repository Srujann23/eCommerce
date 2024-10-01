import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/admin_assets/assets';

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-5 text-[15px]'>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
                    <img className='w-5 h-5' src={assets.add_icon} alt="Add Items" />
                    <p className='block md:hidden'>Add Items</p> {/* Short text for small screens */}
                    <p className='hidden md:block'>Add Items</p> {/* Full text for medium and up */}
                </NavLink>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
                    <img className='w-5 h-5' src={assets.order_icon} alt="List Items" />
                    <p className='block md:hidden'>List Items</p> {/* Short text for small screens */}
                    <p className='hidden md:block'>List Items</p> {/* Full text for medium and up */}
                </NavLink>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
                    <img className='w-5 h-5' src={assets.order_icon} alt="Orders" />
                    <p className='block md:hidden'>Orders</p> {/* Short text for small screens */}
                    <p className='hidden md:block'>Orders</p> {/* Full text for medium and up */}
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
