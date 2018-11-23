import { combineReducers } from 'redux';

const songsReducer = () => {
    return [ 
        { title: 'Hign Hopes', duration: '05:16', composer: 'David Gilmour', year: '1994'},
        { title: 'Echoes', duration: '14:05', composer: 'Pink Floyd', year: '1971'},
        { title: 'Learning To Fly', duration: '08:28', composer: 'David Gilmour', year: '1987'},
        { title: 'Set The Controls For The Heart Of The Sun', duration: '05:27', composer: 'Roger Waters', year: '1968'}

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});