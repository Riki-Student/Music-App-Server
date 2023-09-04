const db = require('../models/index')
const Album = db.album
const AlbumDal = require("../dal/album-db-accessor");
const likedAlbum = db.likedalbum
const LikedAlbumDal = require("../dal/LikedAlbum-db-accessor");


const getLikedAlbumsByUserID = async (req, res) => {
    const { userID } = req.body
    const ids = await LikedAlbumDal.getLikedAlbumByUserID(userID);

    const albums = []

    for (let i = 0; i < ids.length; i++) {
        albums.push(await AlbumDal.getAlbumById(ids[i]))

    }
    
    res.json(albums)
}






module.exports = {
    getLikedAlbumsByUserID
}
