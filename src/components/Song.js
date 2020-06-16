import React from 'react';

const Song = ({ song, position }) => {
  if(!song) return;

  return (
    <li>
    <img src={ song['im:image'][2].label} alt=""/>
    <h4>{position}</h4>
    <p>{song['im:name'].label}</p>
    <p>{song['im:artist'].label}</p>
    </li>
  )
}

export default Song;
