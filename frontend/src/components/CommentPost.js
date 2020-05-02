import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentPost(props) {
    let {comentario} = props
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <ul><li><a href="#"><img src={comentario.author.avatar} class="img-fluid rounded-circle" alt="User" /></a></li></ul>
                </div>
                <div class="col-lg-8">
                    <div class="media-body">
                        <p class="m-0"><h6>{comentario.author.name}</h6></p>
                        <p>   {comentario.content}</p>
                    </div>


                </div>
                <div class="col-lg-2">
                    <small><span><FontAwesomeIcon icon={faHeart} size="1x" /></span></small>
                </div>
            </div>

        </div>
    )
}
export default CommentPost
