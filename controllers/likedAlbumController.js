const db = require('../models/index')
const likedAlbum = db.likedalbum
const LikedAlbumDal = require("../dal/LikedAlbum-db-accessor");



const getLikedAlbumByUserID = async (req, res) => {
    const { userID } = req.user
    res.json(await LikedAlbumDal.getLikedAlbumByUserID(userID))
    
     
}





const updateLikedAlbum=async (req,res)=>{
    const {lal_users_userID,lal_albums_albumID} = req.body
    
        await LikedAlbumDal.updateLikedalbum(lal_users_userID,lal_albums_albumID);
    
    res.json('Successfully updated');

}

const createNewLikedAlbum = async (req, res) => {


    const { lal_albums_albumID } = req.body
    const {userID} = req.user
console.log(lal_albums_albumID)
console.log(userID);
    // Confirm data
    if (!userID || !lal_albums_albumID) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
        const LikedAlbum = await LikedAlbumDal.createNewLikedAlbum( lal_albums_albumID,userID )
        if(LikedAlbum)
        {
            res.status(201).json({ message: 'New LikedAlbum created' })
        }
        else{
            res.status(400).json({
                message: 'Invalid playlist data received'
            })
        }
    
         
    
}

const deleteLikedAlbum=async (req,res)=>{
console.log("----------------------delete------------------------------")

    const { lal_albums_albumID } = req.body
    const {userID} = req.user

    await likedAlbum.destroy({
        where: {
            lal_users_userID: userID,
            lal_albums_albumID:lal_albums_albumID
        }
      });
      res.json('Successfully deleted');
}

module.exports = {
    //getAllLikedAlbums,
    updateLikedAlbum,
    createNewLikedAlbum,
    deleteLikedAlbum,
    getLikedAlbumByUserID
    
}