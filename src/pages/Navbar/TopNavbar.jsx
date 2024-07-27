import React, { useContext } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { MyContext } from '../../context/MyContext'


export default function TopNavbar() {
    const { PostForm, setPostForm } = useContext(MyContext)

    return (
        <React.Fragment>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <button className='bg-white px-9 sm:px-16 py-3 rounded-full font-medium hover:bg-gray-100 hover:text-gray-500 shadow-xl' onClick={() => { setPostForm(true)}}>
                        What's on your mind?
                    </button>
                </div>


                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-rose-700 px-5 w-28 py-2 text-white rounded-full hover:bg-rose-400 hover:text-rose-700 hover:transition hover:duration-300 font-medium">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: 'h-10 w-10 shadow-lg',
                                    userButtonAvatarImage: 'h-10 w-10 shadow-lg',
                                    userButtonTrigger: 'h-10 w-10 shadow-lg',
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </div>
        </React.Fragment>
    );
}
