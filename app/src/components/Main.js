import React from 'react'
import Song from './Song'

const Main = (props) => {
  return (
    <div>
      <div className='w-11/12 ml-12'>
        {props.song.map(dat =>
          <Song
            key={dat.nr}
            title={dat.title}
            artist={dat.artist}
            time={dat.time}
            />
        )}
      </div>
    </div>
  )
}

export default Main