import React from 'react'

export default function StyledInput() {
    return (
        <>
            <div class="relative w-full">
                <input type="text" id="input" required class="peer text-lg w-full border-none border-b-2 border-gray-300 bg-transparent p-1 focus:outline-none focus:border-gray-600" />
                <label for="input" class="absolute top-0 left-0 text-gray-400 transition-all duration-300 peer-focus:top-[-1.25rem] peer-focus:text-sm peer-focus:text-gray-800 peer-valid:top-[-1.25rem] peer-valid:text-sm peer-valid:text-gray-800">
                    Write a Comment
                </label>
                <div class="absolute bottom-0 left-0 h-0.5 w-full bg-rose-700 scale-x-0 transition-transform duration-300 peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            </div>
        </>
    )
}
