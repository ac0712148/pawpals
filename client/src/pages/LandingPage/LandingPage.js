import React from "react";
import { Link } from "react-router-dom";
// import "./LandingPage.css";


function LandingPage() {

    return (
        <div className="container text-center text-white mt-5">
            <div className="bg1">               
                <h1 class="display-4">About PawPals!</h1>
                <p class="lead mt-5">Contrary to popular beliet. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <button type="button" class="btn btn-success btn-lg">
                    <Link class="text-white" to="/signup">Signup</Link>
                </button>
                <button type="button" class="btn btn-info btn-lg">
                    <Link class="text-white" to="/login">Go to Login</Link>
                </button>
            </div>
        </div>

    )
}

export default LandingPage;