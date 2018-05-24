import React, { Component } from 'react';
import './../PlayerBar.css';

class PlayerBar extends Component {
  render() {
    return(
      <section className="player-bar">
        <section id="buttons">
          <span id="previous" onClick={this.props.handlePrevClick}>
            <i className="ion-skip-backward"></i>
          </span>
          <span id="play-pause" onClick={this.props.handleSongClick}>
            <i className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></i>
          </span>
          <span id="next" onClick={this.props.handleNextClick}>
            <i className="ion-skip-forward"></i>
          </span>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.currentFormattedTime}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formattedDuration}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input
            type="range"
            className="seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
