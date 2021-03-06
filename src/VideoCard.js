import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoApp from './VideoApp';
//image, 
//title, channel, views, timestamp, channelImage
function VideoCard({ video,title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
        {/* <img className="videoCard__thumbnail"src={image} alt="" /> */}
        <VideoApp 
            className="videoCard__thumbnail"
            video = {video}
        
        />
        <div className="videoCard__info">
            <AccountCircleIcon 
                className="videoCard__avatar" 
                alt={channel} 
                src={channelImage}    
            />
            <div className="videoCard__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard