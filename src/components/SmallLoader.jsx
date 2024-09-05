import React, { useContext, useEffect } from 'react'
import "./smallLoader.css"
import { MyContext } from '../context/MyContext'

export default function SmallLoader(Class) {
    const { smallLoader, setsmallLoader } = useContext(MyContext)
    useEffect(() => {
        setsmallLoader(true)
        setTimeout(() => {
            setsmallLoader(false)
        }, 3000)
    }, [smallLoader, setsmallLoader])
    return (
        <React.Fragment>
            <div className={`${Class} loader`}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
                <div className="bar bar4"></div>
                <div className="bar bar5"></div>
                <div className="bar bar6"></div>
                <div className="bar bar7"></div>
                <div className="bar bar8"></div>
                <div className="bar bar9"></div>
                <div className="bar bar10"></div>
                <div className="bar bar11"></div>
                <div className="bar bar12"></div>
            </div>

        </React.Fragment>
    )
}
