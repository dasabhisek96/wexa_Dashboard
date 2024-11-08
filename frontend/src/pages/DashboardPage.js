import React from 'react';
import styles from '../styles/DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <h3>Active People</h3>
        <button className={styles.logoutButton}>Log Out</button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1>Welcome To Wexa.ai</h1>
        <div className={styles.postContainer}>
          {/* Example Post 1 */}
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
          {/* Example Post 2 */}
          <div className={styles.postCard}>
            <h4>User 2</h4>
            <div className={styles.placeholderImage}></div>
            <div className={styles.postActions}>
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
          {/* Example Post 3 */}
          <div className={styles.postCard}>
            <h4>User 3</h4>
            <div className={styles.placeholderImage}></div>
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

export default DashboardPage;
