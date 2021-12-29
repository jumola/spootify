import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { SpotifyContextProvider } from './common/providers/Spotify/SpotifyContextWrapper';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <SpotifyContextProvider
      content={
        <Router>
          <CoreLayout>
            <Routes />
          </CoreLayout>
        </Router>
      }
    ></SpotifyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
