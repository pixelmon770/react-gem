import React from 'react'
import "./style/main.css"
import Song from './Song'

function Main() {
  const data = [
    {
      nr: "1",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      time: "3:20",
    },
    {
      nr: "2",
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      time: "3:20",
    }
  ]

  return (
    <div>
      <div className='Main'>
        <Song nr={data[0].nr} title={data[0].title} artist={data[0].artist} time={data[0].time}></Song>
        <Song nr={data[1].nr} title={data[1].title} artist={data[1].artist} time={data[1].time}></Song>
      </div>
    </div>
  )
}

export default Main