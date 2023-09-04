const db = require('../models/index')
const Artist = db.artist

const getAllArtists = async () => {
    
    const artists = await Artist.findAll({})
    return artists
}

const getArtistById = async (id) => {
    const artist = await Artist.findByPk(id);
    return artist
}

const createNewArtist = async (artistName) => {

    const artist = await Artist.create({ artistName })
    if (artist) { // Created
        return artist
    } else {
        return "no artist created"
            
}
}

module.exports = {
    getAllArtists,
    getArtistById,
    createNewArtist
}
