import React from 'react'
import "./style/main.css"
import Song from './Song'

function Main() {
  return (
    <div>
      <div className='Main'>
        <Song nr="1" title="good 4 u" artist="Olivia Rodrigo" time="3:20"></Song>
      </div>
    </div>
  )
}

export default Main