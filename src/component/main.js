import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Blog from './blogpage/blog';
import Contact from './contact';
import Index from './pdf/index';
import Gallary from './photos/gallary';
import Experi from './exp'
import Video from './videoplayer/video'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Index} />
    <Route path="/gallary" component={Gallary}/>
    <Route path="/experi" component={Experi}/>
    <Route path="/video" component={Video}/>
  </Switch>
)

export default Main;