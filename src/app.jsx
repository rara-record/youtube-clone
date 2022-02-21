import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

import VideoList from './components/video_list/video_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = selectvideo => {
    setSelectedVideo(selectvideo);
  };

  const search = query => {
    youtube //
      .search(query)
      .then(result => {
        setVideos(result);
        setSelectedVideo(null);
      });
  };

  const popular = youtube => {
    youtube //
      .mostPopular()
      .then(result => {
        setVideos(result);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    popular(youtube);
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onPopular={popular} youtube={youtube} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
