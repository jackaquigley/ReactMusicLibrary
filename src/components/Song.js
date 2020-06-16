import React from 'react';
import '../public/style.css'

const Song = ({ song, position }) => {
  if(!song) return;

  return (
    <div class="song">
    <img src={ song['im:image'][2].label} alt=""/>
    <h4 class="songPosition">{position}</h4>
    <p class="songInfo">{song['im:name'].label}</p>
    <p class="songInfo">{song['im:artist'].label}</p>
    <audio controls>
      <source src={song['link'][1].attributes.href} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
    </div>
  )
}

export default Song;
