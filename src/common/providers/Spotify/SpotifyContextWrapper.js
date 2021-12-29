import { SpotifyApiContext } from 'react-spotify-api';
import Cookies from 'js-cookie';
import React, { useState } from 'react';

/**
 * Used to wrap a particular component with the Spotify API context.
 * @param content JSX.Element to render
 * @param showLogin If want to display Spotify's login button if the user is unauthenticated. Default is false.
 */
export const SpotifyContextProvider = ({ content }) => {
  const [token] = useState(Cookies.get('spotifyAuthToken'));
  return (
    <SpotifyApiContext.Provider value={token}>
      {content}
    </SpotifyApiContext.Provider>
  );
};
