import React from 'react';

function CreateCommentPost() {
    return (
        <div class="cardbox-comments">
            <span class="comment-avatar float-left">
                <a href="">
                    <img
                        class="rounded-circle"
                        src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg"
                        alt="..."
                    />
                </a>
            </span>
            <div class="search">
                <input placeholder="Write a comment" type="text" />
                <button>
                    <i class="fa fa-camera"></i>
                </button>
            </div>
        </div>
    );
}

export default CreateCommentPost;
