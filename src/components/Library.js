import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './../Library.css';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: albumData
    };
  }

  render() {
    return (
      <section className='library'>
      {
        this.state.albums.map( (album, index) =>
          <Link id="album" to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} alt={album.title} />
            <div id="all-song-information">
              <div id="title" className="song-information">{album.title}</div>
              <div id="artist" className="song-information">{album.artist}</div>
              <div id="length" className="song-information">{album.songs.length} songs</div>
            </div>
          </Link>
        )
      }
      </section>
    );
  }
}

export default Library;
