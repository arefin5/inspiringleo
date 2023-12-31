import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlaylist = () => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      listType: 'playlist',
      list: 'PLZz-q184NOpRTD01069AoVr0C_wHaGSAK', // Replace with your actual YouTube playlist ID
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // You can perform additional actions when the player is ready
  };

  return (
    <div>
      <YouTube  opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubePlaylist;
