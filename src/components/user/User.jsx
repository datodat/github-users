import React from 'react';
import './user.css';

const User = ({ user, theme, colors }) => {
  return (
    <div 
      style={{ backgroundColor: theme ? colors[1] : colors[3] }}
      className='user-container' 
    >
      <div className="user-left">
        <img src={user.avatar_url ? user.avatar_url : ''} alt='user' />
      </div>
      <div className="user-right">
        <div className='user-right-name'>
          <div className="user-right-name-wrapper">
            <h1>{user.login ? user.login : 'Not Available'}</h1>
            <p>{user.name ? user.name : 'Not Available'}</p>
          </div>
          <p>Joined {user.created_at ? user.created_at : 'Not Available'}</p>
        </div>
        <p className='bio'>{user.bio ? user.bio : 'This profile has no bio'}</p>
        <div style={{ backgroundColor: theme ? colors[0] : colors[2] }} className="repos-div">
          <div className="repos">
            <p>Repos</p>
            <p>{user.public_repos ? user.public_repos : 'Not Available'}</p>
          </div>
          <div className="followers">
            <p>Followers</p>  
            <p>{user.followers ? user.followers : 'Not Available'}</p>
          </div>
          <div className="following">
            <p>Following</p>
            <p>{user.following ? user.following : 'Not Available'}</p>
          </div>
        </div>
        <div className="additional-info">
          <div>
            <p>
              <i className="fa-solid fa-location-pin"></i>
              {user.location ? user.location : 'Not Available'}
            </p>
            <p>
              <i className="fa-solid fa-link"></i>
              {user.blog ? user.blog : 'Not Available'}
            </p>
          </div>
          <div>
            <p>
              <i className="fa-brands fa-twitter"></i>
              {user.twitter_username ? user.twitter_username : 'Not Available'}
            </p>
            <p>
              <i className="fa-solid fa-building"></i>
              {user.company ? user.company : 'Not Available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;