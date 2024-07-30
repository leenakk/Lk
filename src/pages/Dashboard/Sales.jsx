import React, { useContext } from 'react'
import DashboardNavbar from './DashboardNavbar'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { salesArray } from './salesData';


export default function Sales() {


    return (
        <React.Fragment>
            <div className='grid grid-cols-[auto,1fr] '>
                <DashboardNavbar />
                <div className='flex flex-col sm:ml-[20vw] md:ml-[20vw] lg:ml-[8vw] gap-y-5 mt-2 px-2 sm:mb-0 mb-16'>
                    <h1 className='text-xl font-bold text-center sm:text-start'>Sales Insight</h1>
                    <div className='flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 w-full'>
                        <div className='bg-white sm:w-[30vw] lg:w-[20vw] w-[70vw] rounded-lg p-4 flex flex-col shadow-xl justify-start items-start gap-y-3'>
                            <div className='px-3 py-2 bg-gray-300 rounded-full'>
                                <FaCircleDollarToSlot size="30px" />
                            </div>
                            <h1 className='text-md font-bold'>Total Earnings</h1>
                            <h1 className='text-3xl font-bold'><sup className='text-gray-400 font-light text-xl'>$</sup>43000</h1>
                        </div>
                        <div className='bg-white lg:w-[20vw] sm:w-[30vw] w-[70vw] rounded-lg p-4 flex flex-col shadow-xl justify-start items-start gap-y-3'>
                            <div className='px-3 py-2 bg-gray-300 rounded-full'>
                                <FaCartFlatbedSuitcase size="30px" />
                            </div>
                            <h1 className='text-md font-bold'>Total Sales</h1>
                            <h1 className='text-3xl font-bold'>40</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 w-full'>
                        <div className='flex justify-between items-end'>
                            <h1 className='text-xl font-bold'>Orders</h1>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        Apply Filter
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0  mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <div className='flex justify-between items-center cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                                                <a
                                                    href="#"
                                                    className="text-green-800 font-bold"
                                                >
                                                    Active

                                                </a>
                                            </div>
                                        </MenuItem>

                                        <MenuItem>
                                            <div className='flex justify-between items-center cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                                                <a
                                                    href="#"
                                                    className="text-blue-800 font-bold"
                                                >
                                                    Pending

                                                </a>
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className='flex justify-between items-center cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                                                <a
                                                    href="#"
                                                    className="text-red-800 font-bold"
                                                >
                                                    Cancelled

                                                </a>
                                            </div>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                        <div class="bg-white shadow-md rounded-lg  w-full ">
                            <div class="grid grid-cols-4  w-full gap-4 py-4 px-6 bg-gray-100">
                                <h3 class="text-xs md:text-lg font-medium text-gray-800 flex-grow">Customer</h3>
                                <h3 class="text-xs md:text-lg font-medium text-gray-800 flex-grow">Cart</h3>
                                <h3 class="text-xs md:text-lg font-medium text-gray-800 flex-grow">Status</h3>
                                <h3 class="text-xs md:text-lg font-medium text-gray-800 flex-grow">Amount</h3>
                            </div>
                            {
                                salesArray && salesArray.map((items, index) => (
                                    <div class="border-t border-gray-200" key={index}>
                                        <div class="grid grid-cols-4 gap-4 py-4 px-6 items-center" >
                                            <div class="flex items-center">
                                                <img src={items.customerUrl} alt="User Image" className="w-8 h-8 rounded-full mr-4 md:block hidden" />
                                                <div>
                                                    <p class="text-xs md:text-lg font-medium text-gray-800 md:w-auto w-20">{items.customerName}</p>
                                                    <p class="text-xs md:text-sm text-gray-500 md:block hidden">{items.customerGmail}</p>
                                                </div>
                                            </div>
                                            <p class="text-xs md:text-lg font-medium text-gray-800 md:w-auto w-20">{items.item}</p>
                                            <p class="text-xs md:text-lg font-medium text-green-500">{items.status}</p>
                                            <p class="text-xs md:text-lg font-medium text-gray-800">${items.Amount}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>



                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
