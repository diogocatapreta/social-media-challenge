import React from 'react';
import HeaderPost from './HeaderPost';
import ContentPost from './ContentPost';
import FooterPost from './FooterPost';
import PostList from './PostList';

function Body() {
    return (
        <div class="hero">
            <div class="container">
                <PostList />
            </div>
        </div>
    );
}

export default Body;
