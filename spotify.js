// handles communication with the Spotify API

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = '57de4d20e70c4d98be37d1a540cfbdcd';
const redirectUri = "https://localhost:3000";

// scopes - only what is being used will be shared?

const scopes = ["user-library-read", "playlist-read-private"];

// login eendpoint

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;