import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function Button(props) {
    const className = `${props.class} px-4 py-2 bg-rose-700 text-white rounded-full hover:bg-rose-400 hover:text-rose-700 hover:transition hover:duration-300 font-medium`
    return (
        <React.Fragment>
            <div>
                
                <button className={className}>{props.name}</button>
            </div>
        </React.Fragment>
    )
}
