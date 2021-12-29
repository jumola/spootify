import React from 'react';
import { ReactComponent as Avatar } from '../../../../assets/images/avatar.svg';
import { useUser } from 'react-spotify-api';
import { first } from 'lodash';
import '../_sidebar.scss';
import 'react-spotify-auth/dist/index.css';

export default function Profile() {
  const { data: user } = useUser();
  return (
    <div className="sidebar__profile">
      {user ? (
        <>
          {user?.images?.length ? (
            <img
              alt={user.display_name}
              src={first(user.images).url}
              className="userImage"
            />
          ) : (
            <Avatar />
          )}
          <p>{user.display_name}</p>
        </>
      ) : null}
    </div>
  );
}
