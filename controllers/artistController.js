const db = require('../models/index')
const Artist = db.artist
const ArtistDal = require("../dal/artist-db-accessor")

const getAllArtists = async (req, res) => {
    
    const artists = await ArtistDal.getAllArtists();
    if (!artists?.length) {
        return res.status(400).json({ message: 'No artists found' })
    }
    res.json(artists)
}

const getArtistById = async (req, res) => {
    const id = req.params.id
    const artist = await ArtistDal.getArtistById(id);
    res.json(artist)
}

const createNewArtist = async (req, res) => {
    const { artistName} = req.body
    // Confirm data
    if (!artistName) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const artist = await ArtistDal.createNewArtist({ artistName })
    if (artist) { // Created
        return res.status(201).json({ message: 'New artist created' })
    } else {
        return res.status(400).json({
            message: 'Invalid artist data received' })
}
}
      
    module.exports = {
        getAllArtists,
        getArtistById,
        createNewArtist
    }