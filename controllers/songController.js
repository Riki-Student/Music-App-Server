const db = require('../models/index')
const songDal = require("../dal/song-db-accessor");

const Song = db.song
const User = db.user

const getAllSongs = async (req, res) => {
   
    const songs = await Song.findAll({})
    
    if (!songs?.length) {
        return res.status(400).json({ message: 'No songs found' })
    }
    res.json(songs)
}

const getSongById = async (req, res) => {
    const id = req.params.id
    const song = await Song.findByPk(id);
    res.json(song)
}

const getSongByGenre = async (req, res)=> {

    const {genreID}=req.body

    res.json(await songDal.getSongByGenre(genreID));

}

const getSongByDate = async (req, res)=> {

    res.json(await songDal.getSongByDate());

}

const getSongsByAlbumId=async (req, res)=>{

    const albumID=req.params.id;
    res.json(await songDal.getSongByAlbum(albumID));
}

const getSongsByArtistId=async (req, res)=>{
    const artistID=req.params.id;
    res.json(await songDal.getSongByArtist(artistID));
}

const rateSong = async (req, res) => {
    const { songID } = req.body;

    try {
        // Get the total number of users who have rated the song
        const numUsers = await User.count();

        // Get the current average rating for the song
        const song = await Song.findByPk(songID);
        const currentRating = song.rating;
console.log(song);
console.log(currentRating);
console.log(numUsers)
        // Calculate the new average rating after the user rates the song
        const userRating = 5; // Replace with the user's rating
        const newRating = (currentRating * numUsers + userRating) / (numUsers + 1);

        // Ensure the new rating doesn't exceed 5 stars
        const finalRating = Math.min(newRating, 5);

        // Update the song's rating in the database
        song.rating = finalRating;
        await song.save();


        res.json({ message: 'Song rated successfully', finalRating });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


const createNewSong = async (req, res) => {
    const { songName, duration, dateReleased, rating, path, genrers_genreID, s_albums_albumID, s_artists_artistID } = req.body
    // Confirm data
    if (!songName) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const song = await Song.create({ songName, duration, dateReleased, rating, path, genrers_genreID, s_albums_albumID, s_artists_artistID })
    if (song) { // Created
        return res.status(201).json({ message: 'New song created' })
    } else {
        return res.status(400).json({
            message: 'Invalid song data received'
        })
    }
}


// const getSong = async (req, res) => {
//     const { genreID, albumID, artistID } = req.body
//     if (genreID) {
//             res.json(await songDal.getSongByGenre(genreID));
//     }
//     else
//         if (albumID) {
            
//             res.json(await songDal.getSongByAlbum(albumID));
//         }
//         else
//             if (artistID) {
                
//                 res.json(await songDal.getSongByArtist(artistID));
//             }
//}

module.exports = {
    getSongById,
    createNewSong,
    //getSong,
    getAllSongs,
    getSongsByAlbumId,
    getSongsByArtistId,
    getSongByGenre,
    getSongByDate,
    rateSong
}
