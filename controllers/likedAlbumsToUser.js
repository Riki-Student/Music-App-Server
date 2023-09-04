const db = require('../models/index')
const Album = db.album
const AlbumDal = require("../dal/album-db-accessor");
const likedAlbum = db.likedalbum
const LikedAlbumDal = require("../dal/LikedAlbum-db-accessor");
 
const getLikedAlbumsByUserID= (req,res)=>{
    const { userID } = req.body
    const ids=LikedAlbumDal.getLikedAlbumByUserID(userID);
    console.log(ids)
    const albums=ids.map((id)=>{
        return AlbumDal.getAlbumById(id)
    })
    return albums;
    
}

module.exports={
    getLikedAlbumsByUserID
}
