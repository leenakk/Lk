import React from 'react';
import BuyNowBtn from './PostComponents/BuyNowBtn';
import LikeBtn from './PostComponents/LikeBtn';
import SaveBtn from './PostComponents/SaveBtn';
import StyledInput from './PostComponents/StyledInput';

export default function Post({ userName, avatar, postTime, caption, postImgUrl, postLikes, comments, price }) {
    return (
        <React.Fragment>
            <div className='flex flex-col bg-white max-w-xl px-5 py-5 rounded-lg gap-y-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3'>
                        <img src={avatar} alt="" className={`w-12 h-12 rounded-full`} />
                        <div>
                            <h1 className='font-medium text-lg '>{userName}</h1>
                            <h1 className='text-xs text-gray-400'>{postTime}</h1>
                        </div>
                    </div>
                    <div>
                        <BuyNowBtn price={price} />
                    </div>
                </div>
                <div>
                    <h1 className='text-sm'>{caption}</h1>
                </div>
                <div>
                    <img src={postImgUrl} alt="" className='w-full rounded-lg' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3 items-center'>
                        <div>
                            <LikeBtn />
                        </div>
                        <div>
                            <i className="fa-regular fa-comment text-[21px] text-gray-400 cursor-pointer hover:text-rose-700 mt-1 hover:scale-110 hover:transition-all hover:duration-300" ></i>
                        </div>
                        <div className='ms-2'>
                            <SaveBtn />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm'>View All Comments</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium'>{postLikes || 0} likes</h1>
                </div>
                {comments.map((comment, index) => (
                    <div className='flex gap-x-3 items-center' key={index}>
                        <img src={comment.userAvatar} alt="" className={`w-6 h-6 rounded-full`} />
                        <h1 className='font-bold text-sm'>{comment.userName}</h1>
                        <h1 className='text-sm'>{comment.userComment}</h1>
                    </div>
                ))}
                <div className='flex gap-x-3 items-center'>
                    <img src={avatar} alt="" className={`w-8 h-8 rounded-full`} />

                    <StyledInput />
                </div>
            </div>
        </React.Fragment>
    );
}
