import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";

// THIS IS TEST CODE FOR UPLOADING A PICTURE
import Axios from "axios";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();
  
  // THIS IS TEST CODE FOR UPLOADING A PICTURE
  const [file, setFile] = useState({});

  const goToEditProfile = () => history.push("/profile");

  // THIS IS TEST CODE FOR UPLOADING A PICTURE
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  const sendFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await Axios.post('/api/photos', formData)
    console.log(response)
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome {user.email}</h2>
      </div>
      <p className="App-intro">
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={goToEditProfile}
        >
          Go to/ Save Profile
        </button>
        <button
          type="button"
          className="btn btn-danger ml-3 mt-5"
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>

      <hr />
      {/* // THIS IS TEST CODE FOR UPLOADING A PICTURE */}
      <input type="file" onChange={selectFile} />
      <button onClick={sendFile}>Send File</button>
    </div>
  );
}

export default Home;
