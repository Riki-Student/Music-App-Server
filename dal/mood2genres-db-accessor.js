//const { playlist, song, playlists2song } = require('../models/index');
const db = require('../models/index')
const Mood2genre = db.mood2genre
const Song = db.song
//const Playlists2song = db.playlists2song;


const getAllSongs2Mood = async (moodID) => {
    const genres = await Mood2genre.findAll({ where: { mood_moodID: moodID } });
    const genreIDs = genres.map(genre => genre.genres_genreID);

    const songs = [];

    for (const genreID of genreIDs) {
        const songsByGenre = await Song.findAll({ where: { genrers_genreID: genreID } });
        songs.push(...songsByGenre);
    }
    return songs;
}

module.exports = {
    getAllSongs2Mood
}