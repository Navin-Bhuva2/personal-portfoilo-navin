import React, {Component} from 'react'
import { render } from 'react-dom';
import Video from './video'
import {videos} from './videos'

class Index1 extends Component {
    render() {
      return (
<Video videos={videos}/>
      )
    }
}
export default Index1
// render(<App videos={videos}/>, document.getElementById('root'));