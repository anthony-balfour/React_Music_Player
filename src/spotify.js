// Handles communication with the Spotify API
// Uses scopes to determine what is available to the client accessing the API
// exports the login endpoint to the login page,

import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = '57de4d20e70c4d98be37d1a540cfbdcd';

// where the user will be redirected after logging into the spotify api
// const redirectUri = "http://localhost:3000";

// URI of EC2 Instance
const redirectUri = "http://3.14.251.109:8004";

// const redirectUri = "http://spotifyapi.music.player.react.s3-website.us-east-2.amazonaws.com/";

// scopes - only what is being used will be shared

const scopes = ["user-library-read", "playlist-read-private"];

// login endpoint, this authorization token is required for all API calls

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// creating base url for every api call
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/"
});

// token is required for every call, target in the headers
// will save the token as the permanent header for every api call
// interceptors modify reuqests before being handled by application
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  })
}

export default apiClient;