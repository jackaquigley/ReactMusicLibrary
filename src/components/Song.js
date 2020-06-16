import React from 'react';

const Song = ({ song, position }) => {
  if(!song) return;

  return (
    <li>
    <h2>{position}</h2>
    </li>
  )
}

export default Song;
