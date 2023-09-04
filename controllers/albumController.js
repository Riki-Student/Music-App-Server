const db = require('../models/index')
const Album = db.album
const AlbumDal = require("../dal/album-db-accessor");

const getAllAlbums = async (req, res) => {

    const albums = await AlbumDal.getAllAlbums();
    if (!albums?.length) {
        return res.status(400).json({ message: 'No albums found' })
    }
    res.json(albums)
}

const getAlbumById = async (req, res) => {
    const id = req.params.id
    res.json(await AlbumDal.getAlbumById(id));
}

const createNewAlbum = async (req, res) => {
    const { albumTitle, artists_artistID } = req.body
    // Confirm data
    if (!albumTitle) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const album = await AlbumDal.createNewAlbum({ albumTitle, artists_artistID })
    if (album) { // Created
        return res.status(201).json({ message: 'New album created' })
    } else {
        return res.status(400).json({
            message: 'Invalid album data received' })
}
}
      
    module.exports = {
        getAllAlbums,
        getAlbumById,
        createNewAlbum
    }
