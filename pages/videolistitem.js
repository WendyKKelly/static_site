import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
   const imageUrl = video.snippet.thumbnails.default.url;

  // can just declare above in (props) change to video const video = props.video;
  return (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
  </div>
    <div className="media-body">
  <div className="media-heading">{video.snippet.title}</div>
  </div>
  </div>
  <style jsx>{`
  .video-item img {
    max-width: 64px;
  }

  .video-detail .details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .list-group-item {
    cursor: pointer;
  }

  .list-group-item:hover {
    background-color: #eee;
  }
  `}</style>
  </li>


);
};




export default VideoListItem;
