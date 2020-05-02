import React from 'react';
import CommentPost from './CommentPost';

function FooterPost(props) {
    let { post } = props;
    return (
        <div>
            <div class="cardbox-base">
                <ul class="float-right">
                    <li>
                        <a>
                            <i class="fa fa-comments"></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <em class="mr-5">12</em>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="fa fa-share-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <em class="mr-3">03</em>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>
                            <i class="fa fa-thumbs-up"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                                class="img-fluid rounded-circle"
                                alt="User"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                                class="img-fluid rounded-circle"
                                alt="User"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                                class="img-fluid rounded-circle"
                                alt="User"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                                class="img-fluid rounded-circle"
                                alt="User"
                            />
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>242 Likes</span>
                        </a>
                    </li>
                </ul>
            </div>
            {post.comments.map((comentario) => (
                <div class="cardbox-base">
                    <CommentPost comentario={comentario} />
                </div>
            ))}
        </div>
    );
}

export default FooterPost;
