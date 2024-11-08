import React from 'react';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.profilePageContainer}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <h3>Profile Name</h3>
        <button className={styles.uploadButton}>Upload Profile Picture</button>
        <h3>Friends</h3>
        <button className={styles.logoutButton}>Log Out</button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1>Welcome To Wexa.ai</h1>
        <h2>Posts</h2>
        <div className={styles.postContainer}>
          {/* Example Post 1 */}
          <div className={styles.postCard}>
            <div className={styles.placeholderImage}></div>
          </div>
          {/* Example Post 2 */}
          <div className={styles.postCard}>
            <h4>Ram</h4>
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className={styles.postImage}
            />
            <div className={styles.postActions}>
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
