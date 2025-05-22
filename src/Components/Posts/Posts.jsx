import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post/Post';

const Posts = () => {
    const poster = useLoaderData();
    return (
        <div>
            <h1>Just posts</h1>
            <h2>We have over {poster.length-1} post</h2>
            <div>
                {
                    poster.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;