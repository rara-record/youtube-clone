import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo(({ videos, onVideoClick, display }) => {
  // console.log('VideoList');
  return (
    <ul className={styles.container}>
      {videos.map(video => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
