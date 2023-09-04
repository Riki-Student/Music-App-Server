const db = require('../models/index')
const Artist = db.artist
const ArtistDal = require("../dal/artist-db-accessor");
const likedArtist = db.likedartist
const LikedArtistDal = require("../dal/likedArtist-db-accessor");


const getLikedArtistsByUserID = async (req, res) => {
    const { userID } = req.body
    const ids = await LikedArtistDal.getLikedArtistByUserID(userID)

    const artists = []

    for (let i = 0; i < ids.length; i++) {
        artists.push(await ArtistDal.getArtistById(ids[i]))

    }
    
    res.json(artists)
}




module.exports = {
    getLikedArtistsByUserID
}