import React, { useContext } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { MyContext } from '../../context/MyContext'
import StyledButton from '../../components/StyledButton';


export default function TopNavbar() {
    const { PostForm, setPostForm } = useContext(MyContext)

    return (
        <React.Fragment>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <StyledButton btnTxt="Create a Post" Class="border-2 border-rose-700 text-rose-700 before:bg-rose-700" click={() => setPostForm(true)} />
                </div>
                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <button class="relative px-6 py-2 border-2 border-rose-700 text-rose-700 uppercase font-medium text-base transition-all duration-300 overflow-hidden bg-transparent rounded-full before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:h-[300%] before:w-0 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-rose-700 before:z-[-1] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:w-full">
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
