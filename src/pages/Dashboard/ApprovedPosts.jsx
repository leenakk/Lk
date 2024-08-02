import React, { useContext } from 'react'
import DashboardNavbar from './DashboardNavbar'
import StyledButton from "../../components/StyledButton"
import { MyContext } from '../../context/MyContext'
import Postform from '../../components/Post/PostForm'
import { postArray } from '../../components/Post/postsData'
import Post from '../../components/Post/Post'


export default function ApprovedPosts() {
    const { PostForm, setPostForm } = useContext(MyContext)
    return (
        <React.Fragment>
            <div className='grid grid-cols-[auto,1fr] h-screen'>
                <DashboardNavbar />
                <div className='flex flex-col sm:ml-[20vw] md:ml-[20vw] lg:ml-[8vw] gap-y-5'>
                    <div className='flex justify-between w-full items-center px-4'>
                        <h1 className='text-xl font-bold'>APPROVED POSTS</h1>
                        <StyledButton btnTxt="Create a Post" Class= "border-2 border-rose-700 text-rose-700 before:bg-rose-700" click={() => setPostForm(true)} />
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-y-5 gap-x-5 py-5 sm:mb-0 mb-14'>
                        {postArray.map((items, index) => (
                            <Post
                                key={index}
                                Class="max-w-lg"
                                userName={items.userName}
                                avatar={items.userAvatar}
                                postTime={items.postTime}
                                caption={items.caption}
                                postImgUrl={items.postImgUrl}
                                postLikes={items.postLikes}
                                comments={items.comments}
                                dropdown
                            />
                        ))}

                    </div>
                </div>
            </div>
            {PostForm && <Postform />}
        </React.Fragment>
    )
}
