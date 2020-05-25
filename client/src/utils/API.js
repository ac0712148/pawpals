import axios from "axios";
// qs is a third party stringify encoder
// import qs from "qs";

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", { username: username, email: email, password: password });
  },
  addPhoto: (newPhoto) => {
    return axios.post(`/api/photos/`, newPhoto)
  },
  addUserPhotos: (userid, photoUrl) => {
    return axios.patch(`/api/userPhotos/${userid}`, { photo: photoUrl })
  },
  deletePhoto: (userid, photoUrl) => {
    console.log(photoUrl)
      // const requestBody = {photo: photoUrl}
      // const config = {headers: {'Content-Type': 'application/json', 'Accept-Encoding': 'gzip, deflate, br', 'Accept': '*/*' }}
      // return axios.delete(`/api/userPhotos/${userid}`, qs.stringify(requestBody), config)
      //might need to remove the backticks for the template literal

    return axios.delete(`/api/userPhotos/${userid}`, { data: { photo: photoUrl } })
  }
};