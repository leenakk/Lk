import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Navlist(props) {
    const location = useLocation();
    const className = `${props.class} flex flex-col gap-y-5 `;

    return (
        <>
            <ul className={className}>
                <div className='flex gap-x-3 cursor-pointer items-center'>
                    <i className={`fa-solid fa-house ${location.pathname === '/' ? 'text-rose-700' : "text-gray-400"}  hover:text-rose-700 hover:transition hover:duration-300`} ></i>
                    <li className={`text-md font-medium ${location.pathname === '/' ? 'text-black' : 'text-gray-400'} hover:text-black  hover:transition hover:duration-300`}>Home</li>
                </div>
                <div className='flex gap-x-3 cursor-pointer items-center'>
                    <i className={`fa-solid fa-coins ${location.pathname === '/earnings' ? 'text-rose-700' : "text-gray-400"} hover:text-rose-700 hover:transition hover:duration-300`}></i>
                    <li className={`text-md font-medium ${location.pathname === '/earnings' ? 'text-black' : 'text-gray-400'} hover:text-black  hover:transition hover:duration-300`}>Earnings</li>
                </div>
                <div className='flex gap-x-3 cursor-pointer items-center'>
                    <i className={`fa-solid fa-cart-flatbed ${location.pathname === '/orders' ? 'text-rose-700' : "text-gray-400"} hover:text-rose-700 hover:transition hover:duration-300`}></i>
                    <li className={`text-md font-medium ${location.pathname === '/orders' ? 'text-black' : 'text-gray-400'} hover:text-black  hover:transition hover:duration-300`}>Orders</li>
                </div>
                <div className='flex gap-x-3 cursor-pointer items-center'>
                    <i className={`fa-solid fa-coins ${location.pathname === '/dashboard' ? 'text-rose-700' : "text-gray-400"} hover:text-rose-700 hover:transition hover:duration-300`}></i>
                    <li className={`text-md font-medium ${location.pathname === '/dashboard' ? 'text-black' : 'text-gray-400'} hover:text-black  hover:transition hover:duration-300`}>Dashboard</li>
                </div>
            </ul>
        </>
    );
}
