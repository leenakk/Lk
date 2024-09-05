import React, { useContext, useEffect, useState } from 'react';
import AdminDashboardNavbar from './AdminDashboardNavbar';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { MyContext } from '../../context/MyContext';
import Postform from '../../components/Post/PostForm';


export default function Users() {
    const { PostForm, setPostForm } = useContext(MyContext)

    return (
        <React.Fragment>
            <div className='grid grid-cols-[auto,1fr] h-screen'>
                <AdminDashboardNavbar />
                <div className='flex flex-col justify-center items-center sm:ml-[14vw] md:ml-[20vw] lg:ml-[8vw] gap-y-5'>
                </div>
            </div>
            { PostForm && <Postform />}
        </React.Fragment>
    );
}
