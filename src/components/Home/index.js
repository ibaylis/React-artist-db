import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header';
import Banner from './banner';
import ArtistsList from './artistList';



const URL_ARTIST = 'http://localhost:3000/artists';

class Home extends Component {

    state = {
        artist:''
    }

    componentDidMount(){
        axios.get(URL_ARTIST)
        .then(response => {
            this.setState({artists: response.data})
        })
    }

  render() {
    return (
      <>
        <Header />
        <Banner />
        <ArtistsList allArtists={this.state.artists}/>
      </>
    )
  }
}

export default Home;