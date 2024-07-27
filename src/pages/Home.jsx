import React, { useContext } from 'react';
import TopNavbar from './Navbar/TopNavbar';
import { MyContext } from '../context/MyContext';
import Post from '../components/Post/Post';
import { postArray } from '../components/Post/postsData';
import Postform from '../components/Post/PostForm';

export default function Home() {
    const { PostForm, setPostForm } = useContext(MyContext)

    return (
        <React.Fragment>
            <div className='flex flex-col gap-y-5'>
                <TopNavbar />
                <div className='flex flex-col gap-5'>
                    {postArray.map((items, index) => (
                        <Post
                            key={index}
                            userName={items.userName}
                            avatar={items.userAvatar}
                            postTime={items.postTime}
                            caption={items.caption}
                            postImgUrl={items.postImgUrl}
                            postLikes={items.postLikes}
                            comments={items.comments}
                            price={items.price}
                        />
                    ))}
                </div>  
            </div>
            {PostForm && <Postform /> }
        </React.Fragment>
    );
}
