// handles communication with the Spotify API
import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = '57de4d20e70c4d98be37d1a540cfbdcd';
const redirectUri = "http://localhost:3000";

// scopes - only what is being used will be shared?

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
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function(config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  })
}

export default apiClient;