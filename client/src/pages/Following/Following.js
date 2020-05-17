import React from "react";
import { Link } from "react-router-dom";

function Following() {

    return (

        <div className="container landing-page text-center text-black mt-5">
            <div className="bg1">
                <h1 className="display-4">Following</h1>

                <p className="lead mt-5">Contrary to popular beliet. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <button type="button" className="btn btn-info btn-sm">
                    <Link to="/profile">Back To Profile</Link>
                </button>
                <button type="button" className="btn btn-info btn-sm ml-5">
                    <Link to="/myphotos">My Photos</Link>
                </button>
                <button type="button" className="btn btn-info btn-sm ml-5">
                    <Link to="/posts">My Posts</Link>
                </button>
            </div>
        </div>


    )
}

export default Following;