import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayTypes = display === 'list' ? styles.list : styles.grid;

    console.log('VideoItem');

    return (
      <li className={`${displayTypes}`} onClick={() => onVideoClick(video)}>
        <div className={styles.video}>
          <figure className={styles.thumbnail}>
            <img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
          </figure>

          <div className={styles.metadata}>
            <h2 className={styles.title}>{snippet.title}</h2>
            <h3 className={styles.channel}>{snippet.channelTitle}</h3>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
