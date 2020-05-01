import React from 'react'


function HeaderPost() {
    return (
        <div class="cardbox-heading">
            <div class="dropdown float-right">
                <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                    <em class="fa fa-ellipsis-h"></em>
                </button>
                <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" >
                    <a class="dropdown-item" href="#">Hide post</a>
                    <a class="dropdown-item" href="#">Stop following</a>
                    <a class="dropdown-item" href="#">Report</a>
                </div>
            </div>
            <div class="media m-0">
                <div class="d-flex mr-3">
                    <a href=""><img class="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQEWq9rTC6yWtg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=UyqNDwY9FgAXKlvdku6wgzQXDySCXfnb1KfD7SollY8" alt="User" /></a>
                </div>
                <div class="media-body">
                    <p class="m-0">Diogo Cata Preta</p>
                    <small><span><i class="icon ion-md-pin"></i> Uberlandia, Brazil</span></small>
                    <small><span><i class="icon ion-md-time"></i> 10 hours ago</span></small>
                </div>
            </div>
        </div>
    );
}

export default HeaderPost
