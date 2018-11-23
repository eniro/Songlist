const songsReducer = () => {
    return [ 
        { title: 'Hign Hopes', duration: '05:16'},
        { title: 'Echoes', duration: '14:05'},
        { title: 'Learning To Fly', duration: '08:28'},
        { title: 'Set The Controls For The Heart Of The Sun', duration: '05:27'}

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload;
    }
}