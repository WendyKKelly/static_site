import React from 'react';
import VideoListItem from './videolistitem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (

      <VideoListItem
    onVideoSelect={props.onVideoSelect}
    key={video.etag}
    video={video} />
);
  });
  return (

    <ul className="col-md-4 list-group">
    {videoItems}

    <style jsx>{`

        video-item img {
          max-width: 64px;
        }


        list-group-item {
          cursor: pointer;
        }

        list-group-item:hover {
          background-color: #eee;
        }
  `}</style>
    </ul>
  )
}


export default VideoList
