import React from 'react'
import "./style/song.css"

function Song(props) {
  return (
    <div className='song'>
      <div className='number'>
        <p className='lp'>{props.nr}</p>
        <img src='/assets/olivia.png' alt='olivia Rodrigo'></img>
        <p className='title'>{props.title}</p>
      </div>
      <div>
        <p>Artist</p>
        <p className='artist'>{props.artist}</p>
      </div>
      <div>
        <p>Time</p>
        <p className='time'>{props.time}</p>
      </div>

    </div>
  )
}

export default Song