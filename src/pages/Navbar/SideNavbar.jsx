import React from 'react'
import Navlist from '../../components/Navlist'
import Button from '../../components/Button'
import { useLocation } from 'react-router-dom'

export default function SideNavbar() {
    const location = useLocation()
    return (
        <React.Fragment>
            <div className='flex h-screen'>
                <div className='sm:block hidden '>
                    <div className=' bg-white sm:w-[20vw] md:w-[15vw] flex flex-col justify-start gap-y-5 items-center h-screen  shadow-2xl py-8 fixed top-0 left-0'>
                        <div className='flex flex-col justify-center items-center gap-y-8'>
                            <div>
                                <h1 className='text-3xl font-bold text-rose-600 '>LK</h1>
                            </div>
                            <div className='bg-gray-300 py-[1px] xl:px-20 sm:px-14 rounded'>
                            </div>
                            <div>
                                <Navlist />
                            </div>
                            <div className='bg-gray-300 py-[1px] xl:px-20 sm:px-14  rounded'>
                            </div>
                            <div>
                                <ul className='flex flex-col  gap-y-5'>
                                    <div className='flex gap-x-3 cursor-pointer items-center'>
                                        <i class={`fa-solid fa-user ${location.pathname === '/profile' ? 'text-rose-700' : "text-gray-400"} hover:text-rose-700 `}></i>
                                        <li className={`${location.pathname === "/profile" ? 'text-black' : "text-gray-400"} hover:text-black  text-md font-medium  `}>Profile</li>
                                    </div>
                                    <div className='flex gap-x-3 cursor-pointer items-center'>
                                        <i class={`fa-solid fa-gear ${location.pathname === '/settings' ? 'text-rose-700' : "text-gray-400"} hover:text-rose-700 `}></i>
                                        <li className={`${location.pathname === "/settings" ? 'text-black' : "text-gray-400"} hover:text-black  text-md font-medium  `}>Settings</li>
                                    </div>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='block sm:hidden fixed bottom-[-10px] left-0 right-0 bg-white w-full py-6 rounded-xl px-6 z-10 shadow-2xl'>
                <ul className='flex justify-between w-full'>
                    <li>
                        <i class={`fa-solid fa-house ${location.pathname === "/" ? "text-rose-700" : "text-gray-400"} hover:transition hover:duration-300 text-[25px]`}></i>
                    </li>
                    <li>
                        <i class={`fa-solid fa-coins ${location.pathname === "/earnings" ? "text-rose-700" : "text-gray-400"} hover:transition hover:duration-300 text-[25px]`}></i>
                    </li>
                    <li>
                        <i class={`fa-solid fa-coins ${location.pathname === "/dashboard" ? "text-rose-700" : "text-gray-400"} hover:transition hover:duration-300 text-[25px]`}></i>
                    </li>
                    <li>
                        <i class={`fa-solid fa-cart-flatbed ${location.pathname === "/myOrders" ? "text-rose-700" : "text-gray-400"} hover:transition hover:duration-300 text-[25px]`}></i>
                    </li>
                    <li>
                        <i class={`fa-solid fa-user ${location.pathname === "/profile" ? "text-rose-700" : "text-gray-400"} hover:transition hover:duration-300 text-[25px]`}></i>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    )
}
