import React from 'react'
// get our fontawesome imports
import { faMapPin, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function HeaderPost(props) {
    let { nome, fotoPerfil, local, horarioPost } = props;
    return (
        <div class="cardbox-heading">

            <div class="dropdown float-right">
                <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                    <em class="fa fa-ellipsis-h"></em>
                </button>
                <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" >
                    <a class="dropdown-item" href="#">Esconder Post</a>
                    <a class="dropdown-item" href="#">Parar de Seguir</a>
                    <a class="dropdown-item" href="#">Denunciar</a>
                </div>
            </div>
            <div class="media m-0">
                <div class="d-flex mr-3">
                    <a href=""><img class="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQEWq9rTC6yWtg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=UyqNDwY9FgAXKlvdku6wgzQXDySCXfnb1KfD7SollY8" alt="User" /></a>
                </div>
                <div class="media-body">
                    <p class="m-0">{nome}</p>
                    <small><span><FontAwesomeIcon icon={faMapPin} size="1x" /> {local}</span></small>
                    <small><span><FontAwesomeIcon icon={faClock} size="1x" />  {horarioPost}</span></small>
                </div>
            </div>
        </div>
    );
}

export default HeaderPost
