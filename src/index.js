import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
// import Video from './component/videoplayer/video'
// import {videos} from './component/videoplayer/videos'

ReactDOM.render(
  <BrowserRouter>
  {/* <Video  videos={videos}/> */}
<App />

  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();