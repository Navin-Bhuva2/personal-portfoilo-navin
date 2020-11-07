import React, { Component } from 'react';
import './style.css';
import VideoScrollList from './video-scroll-list'
import ReactPlayer from 'react-player';

class Video extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <span>
      <ReactPlayer  width='100%'
          height='500px' url='https://www.youtube.com/watch?v=Ke90Tje7VS0'  /><br></br>
      <ReactPlayer width='100%'height='500px' url='https://www.youtube.com/watch?v=9LNaQln11BA'  /><br></br>
      <ReactPlayer width='100%'height='500px' url='https://www.youtube.com/watch?v=lYWYWyX04JI'  /><br></br>
      <ReactPlayer width='100%'height='500px' url='https://www.youtube.com/watch?v=43IbFDSVdB0'  /><br></br>
      <ReactPlayer width='100%'height='500px' url='https://www.youtube.com/watch?v=tiLWCNFzThE'  />
      </span>
    </div>
    );
  }
}

export default Video

