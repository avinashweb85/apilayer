import React, { useEffect, useState } from 'react'
import { postList } from '../services/postsApi';

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const userPosts = await postList();
        setPosts(userPosts?.data);
    };
    return (
        <div>Post</div>
    )
}

export default Post;