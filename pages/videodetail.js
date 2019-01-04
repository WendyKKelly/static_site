import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/ ${videoId}`;
 return (
   <div className="video-detail col-md-8">
   <style jsx>{`
     .video-detail .details {
       margin-top: 10px;
       padding: 10px;
       border: 1px solid #ddd;
       border-radius: 4px;
     }

     `}</style>
   <div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responseive-item" src={url}></iframe>
</div>
<div className="details">

<div> {video.snippet.title}</div>
<div> {video.snippet.description}</div>
   </div>
   <style jsx>{`
     .video-detail .details {
       margin-top: 10px;
       padding: 10px;
       border: 1px solid #ddd;
       border-radius: 4px;
     }

     `}</style>

   </div>
 )

};

export default VideoDetail;
