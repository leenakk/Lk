import React, { useContext, useEffect, useState } from 'react';
import AdminDashboardNavbar from './AdminDashboardNavbar';
import { useUser } from '@clerk/clerk-react';
import { postArray } from "../../components/Post/postsData";
import StyledButton from '../../components/StyledButton';
import { useLocation, useNavigate } from 'react-router-dom';
import Postform from '../../components/Post/PostForm';
import { MyContext } from '../../context/MyContext';

export default function AdminDashboard() {
  const [toggleHide, setToggleHide] = useState(postArray.map(() => false));
  const { loader, setloader, PostForm, setPostForm } = useContext(MyContext)

  const toggleHandle = (index) => {
    setToggleHide(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user does not have the admin role, redirect them to the home page
    if (user?.publicMetadata.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <React.Fragment>
      <div className='grid grid-cols-[auto,1fr] h-screen'>
        <AdminDashboardNavbar />
        <div className='flex flex-col justify-center items-center sm:ml-[10vw] md:ml-[8vw] lg:ml-[2vw] gap-y-5 py-5'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center w-full'>
            <h1 className='text-2xl font-bold text-center'>Posts Pending for Approval</h1>
            <div className='flex gap-x-2'>
              <StyledButton btnTxt="Reject" Class="border-2 border-rose-700 text-rose-700 before:bg-rose-700" />
              <StyledButton btnTxt="Approve" Class="border-2 border-green-700 text-green-700 before:bg-green-700" />
            </div>
          </div>
          <div>
            <div className="bg-white shadow-md rounded-lg w-full h-screen overflow-y-scroll">
              <div className="grid grid-cols-4 bg-rose-700 w-full items-center gap-x-24 sm:gap-x-4 lg:gap-x-32 py-4 px-6">
                <h3 className="text-xs md:text-lg font-medium text-white flex-grow">User</h3>
                <h3 className="text-xs md:text-lg font-medium text-white flex-grow">Post</h3>
                <h3 className="text-xs md:text-lg font-medium text-white flex-grow">Image</h3>
                <h3 className="text-xs md:text-lg font-medium text-white">Price</h3>
              </div>
              {postArray.map((items, index) => (
                <div className="border-t border-gray-200" key={index}>
                  <div className="grid grid-cols-4 w-full items-center gap-x-20 sm:gap-x-4 lg:gap-x-32 py-4 px-6">
                    <div className='flex gap-2 items-center'>
                      <input type="checkbox" />
                      <img src={items.userAvatar} alt="" className='w-6 h-6 rounded-full sm:block hidden' />
                      <h1 className="text-xs md:text-lg font-medium text-gray-800 flex-grow">{items.userName}</h1>
                    </div>
                    <div>
                      <h2 className='text-xs sm:ms-0 -ms-5 w-40 overflow-hidden'>
                        {`${!toggleHide[index] ? items.caption.slice(0, 15) : items.caption}`}
                      </h2>
                      <button onClick={() => toggleHandle(index)} className='text-xs'>
                        {toggleHide[index] ? "See less" : "See more"}
                      </button>
                    </div>
                    <div className='w-[40vw] sm:w-auto'>
                      <img src={items.postImgUrl} className='w-[20vw] sm:w-10 h-20 sm:h-10' alt="" />
                    </div>
                    <h1 className="text-xs md:text-lg font-medium text-gray-800">{items.price}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {PostForm && <Postform />}
    </React.Fragment>
  );
}
