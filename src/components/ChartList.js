import React from 'react'
import Song from './Song.js'

const ChartList = (props) => {

  const songs = props.songs.map((song, index) => {
    return <Song key={index} song={song} position={index + 1}/>
  })

  return (
    <ul className="list">
      { songs }
    </ul>
  )
};

export default ChartList;
