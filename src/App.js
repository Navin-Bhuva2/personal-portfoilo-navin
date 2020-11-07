import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">NAVIN BHUVA</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/gallary">Gallary</Link>
                <Link to="/experi">Experience</Link>
                <Link to="/video">Video</Link>
                <Link to="/blog">Blogs Page</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Navin Bhuva</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/gallary">Gallary</Link>
              <Link to="/experi">Experience</Link>
              <Link to="/video">Video</Link>
              <Link to="/blog">Blogs Page</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;