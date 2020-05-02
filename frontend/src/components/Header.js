import React from "react";

// get our fontawesome imports
import { faEnvelope, faHeart, faCompass, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark mb-1 navbar navbar-expand-lg orange lighten-1 fixed-top">
            <a class="navbar-brand" href="/">
                <img src="http://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> BeSocial
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Posts<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Friends</a>
                    </li>
                </ul>
                <form class="form-inline">
                    <div class="md-form my-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
                <ul className="navbar-nav ml-auto nav-flex-icons">


                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" href="/">
                            <FontAwesomeIcon icon={faCompass} size="lg" />
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" href="/">
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" href="/">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </li>
                    <li className="nav-item avatar">
                        <a className="nav-link p-0" href="#">
                            <img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" className="rounded-circle z-depth-0"
                                alt="avatar image" height="35" /></a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header;
