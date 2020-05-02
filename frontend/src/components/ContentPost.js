import React from 'react'


function ContentPost(props) {
    let { conteudoPost } = props;
    return (
        <div>
            <div class="cardbox-item">
                <img class="img-fluid" src={conteudoPost} alt="Image" data-toggle="modal" data-target="#exampleModal" />
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPost
