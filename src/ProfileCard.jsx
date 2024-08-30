import React from 'react';
import './ProfileCard.css';
import profileImage from './photo.jpg';

const ProfileCard = () => {
    return (
      <div className="profile-card">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">Abirami</h2>
        <p className="profile-title">Frontend Developer</p>
        <p className="profile-description">
        Learning by doing is the path to becoming a skilled developer.
        </p>
        <div className="profile-socials">
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" className="social-link">Naukri</a>
          <a href="https://github.com/abiramim11/" className="social-link">GitHub</a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#all" className="social-link">Gmail</a>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  