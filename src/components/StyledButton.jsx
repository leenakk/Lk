import React from 'react'

export default function StyledButton(props) {
    return (
        <React.Fragment>
            <button className={`${props.Class} relative px-6 py-3 border-2 border-rose-700 text-rose-700 uppercase font-medium text-base transition-all duration-300 overflow-hidden bg-transparent rounded-full before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:h-[300%] before:w-0 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-rose-700 before:z-[-1] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:w-full`} onClick={props.click}>
                {props.btnTxt}
            </button>
        </React.Fragment>
    )
}
