const db = require('../models/index')
const songDal = require("../dal/song-db-accessor");

const Song = db.song

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

const getSongsByAlbumId=async (req, res)=>{

    const albumID=req.params.id;
    res.json(await songDal.getSongByAlbum(albumID));
}

const getSongsByArtistId=async (req, res)=>{
    const artistID=req.params.id;
    res.json(await songDal.getSongByArtist(artistID));
}


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
    getSongsByArtistId
}
