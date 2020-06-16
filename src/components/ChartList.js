import React from 'react'
import Song from './Song.js'
import '../public/style.css'

const ChartList = (props) => {

  const songs = props.songs.map((song, index) => {
    return <Song key={index} song={song} position={index + 1}/>
  })

  return (
    <div id="mainWrapper">
      { songs }
    </div>
  )
};

export default ChartList;
