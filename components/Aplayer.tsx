import React from 'react'
import ReactAplayer from 'react-aplayer'

export default class Aplayer extends React.Component {
  ap: any
  // event binding example
  onPlay = () => {
    console.log('on play')
  }

  onPause = () => {
    console.log('on pause')
  }

  // example of access aplayer instance
  onInit = (ap) => {
    this.ap = ap
  }

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      audio: [
        {
          name: 'Beyond',
          artist: 'Leo Ku',
          url: 'http://music.163.com/song/media/outer/url?id=146401.mp3',
          cover:
            'http://p1.music.126.net/qx1i5iJrKsCf7zGv6FqikQ==/18885488369769708.jpg',
          // lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    }

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    )
  }
}
