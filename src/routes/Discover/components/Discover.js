import React from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import {
  BrowseNew,
  BrowseFeatured,
  BrowseCategories,
  useUser,
} from 'react-spotify-api';
import '../styles/_discover.scss';
import { Scopes, SpotifyAuth } from 'react-spotify-auth';

export default function Discover() {
  const limit = 10;
  const { data: user } = useUser();
  return (
    <div className="discover">
      {user ? (
        <>
          <BrowseNew options={{ limit }}>
            {({ data }, loading, error) =>
              data && data?.albums?.items ? (
                <DiscoverBlock
                  text="RELEASED THIS WEEK"
                  id="released"
                  data={data.albums.items}
                />
              ) : null
            }
          </BrowseNew>

          <BrowseFeatured options={{ limit }}>
            {({ data }, loading, error) =>
              data && data?.playlists?.items ? (
                <DiscoverBlock
                  text="FEATURED PLAYLISTS"
                  id="featured"
                  data={data.playlists.items}
                />
              ) : null
            }
          </BrowseFeatured>

          <BrowseCategories options={{ limit }}>
            {({ data }, loading, error) =>
              data && data?.categories?.items ? (
                <DiscoverBlock
                  text="BROWSE"
                  id="browse"
                  data={data.categories.items}
                  imagesKey="icons"
                />
              ) : null
            }
          </BrowseCategories>
        </>
      ) : (
        <SpotifyAuth
          redirectUri={process.env.REACT_APP_SPOTIFY_CALLBACK_URL}
          clientID={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
          scopes={[Scopes.userReadPrivate]}
        />
      )}
    </div>
  );
}
