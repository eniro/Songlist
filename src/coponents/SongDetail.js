import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Select a song!</div>
    }
    return (
    <div>
    <h3>Details for:</h3>
    <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
        <br />
        Composer: {song.composer}
        <br />
        Year: {song.year}
    </p>
    </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);