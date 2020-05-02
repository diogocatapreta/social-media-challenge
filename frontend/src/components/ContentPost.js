import React from 'react'


function ContentPost(props) {
    let {conteudoPost} = props;
    return (
        <div class="cardbox-item">
            <img class="img-fluid" src={conteudoPost} alt="Image" />
        </div>
    )
}

export default ContentPost
