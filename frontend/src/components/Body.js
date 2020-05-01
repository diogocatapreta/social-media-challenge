import React from "react"
import HeaderPost from './HeaderPost'
import ContentPost from './ContentPost';
import FooterPost from './FooterPost'
import CommentPost from './CommentPost'

function Body() {
    return (
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="cardbox shadow-lg bg-white">
                            <HeaderPost />
                            <ContentPost />
                            <FooterPost />
                            <CommentPost />
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Body;
