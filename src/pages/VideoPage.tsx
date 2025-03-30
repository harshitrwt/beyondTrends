import React from 'react';

const VideoPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Video Page</h1>
      <video controls style={styles.video}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '20px',
    backgroundColor: '#121212',
    color: '#fff',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  video: {
    width: '80%',
    maxWidth: '600px',
    borderRadius: '10px',
  },
};

export default VideoPage;
