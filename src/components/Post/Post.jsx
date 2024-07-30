import React, { useState } from 'react';
import BuyNowBtn from './PostComponents/BuyNowBtn';
import LikeBtn from './PostComponents/LikeBtn';
import SaveBtn from './PostComponents/SaveBtn';
import StyledInput from './PostComponents/StyledInput';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Post({ userName, avatar, postTime, caption, postImgUrl, postLikes, comments, price, Class, dropdown }) {
    const [toggelHide, setToggelHide] = useState(false)
    const [btnTxt, setBtnTxt] = useState("see more")
    function seeMore() {
        if (!toggelHide) {
            setBtnTxt("See less")
        } else {
            setBtnTxt("See more")
        }
        setToggelHide(!toggelHide)
    }

    return (
        <React.Fragment>
            <div className={`${Class} flex flex-col bg-white max-w-2xl px-5 py-5 rounded-lg gap-y-3`}>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3'>
                        <img src={avatar} alt="" className={`w-12 h-12 rounded-full`} />
                        <div>
                            <h1 className='font-medium text-lg '>{userName}</h1>
                            <h1 className='text-xs text-gray-400'>{postTime}</h1>
                        </div>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <BuyNowBtn price={price} />
                        {
                            dropdown ? 
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        <i class="fa-solid fa-ellipsis-vertical text-md"></i>
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
                                                    className=""
                                                >
                                                    Edit Post

                                                </a>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </div>
                                        </MenuItem>

                                        <MenuItem>
                                            <div className='flex justify-between items-center cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                                                <a
                                                    href="#"
                                                    className=""
                                                >
                                                    Delete Post

                                                </a>
                                                <i class="fa-solid fa-trash"></i>
                                            </div>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                            : null
                        }

                    </div>

                </div>
                <div className=''>
                    <h1 className='text-sm'>{!toggelHide ? caption.slice(0, 80) : caption}</h1>
                    <button onClick={() => seeMore()} className='text-sm'>{btnTxt}</button>
                </div>
                <div>
                    <img src={postImgUrl} alt="" className='w-full rounded-lg' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3 items-center'>
                        <div>
                            <LikeBtn />
                        </div>
                        <div>
                            <i className="fa-regular fa-comment text-[21px] text-gray-400 cursor-pointer hover:text-rose-700 mt-1 hover:scale-110 hover:transition-all hover:duration-300" ></i>
                        </div>
                        <div className='ms-2'>
                            <SaveBtn />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm'>View All Comments</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium'>{postLikes || 0} likes</h1>
                </div>
                {comments.map((comment, index) => (
                    <div className='flex gap-x-3 items-center' key={index}>
                        <img src={comment.userAvatar} alt="" className={`w-6 h-6 rounded-full`} />
                        <h1 className='font-bold text-sm'>{comment.userName}</h1>
                        <h1 className='text-sm' id='comment'>{comment.userComment}</h1>
                    </div>
                ))}
                <div className='flex gap-x-3 items-center'>
                    <img src={avatar} alt="" className={`w-8 h-8 rounded-full`} />

                    <StyledInput />
                </div>
            </div>
        </React.Fragment>
    );
}
