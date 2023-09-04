const db = require('../models/index')
const likedArtist = db.likedartist
const likedArtistDal = require("../dal/likedArtist-db-accessor");


// const getAllLikedAlbums = async (req, res) => {
   
//     const likedartists = await LikedArtist.findAll({})
    
//     if (!likedartists?.length) {
//         return res.status(400).json({ message: 'No likedartists found' })
//     }
//     res.json(likedartists)
// }
const getLikedArtistByUserID = async (req, res) => {

    const { userID } = req.user
     res.json(await likedArtistDal.getLikedArtistByUserID(userID));
}

const updateLikedArtist=async (req,res)=>{
    const {lar_users_userID,lar_songs_songID} = req.body
    
        await likedArtistDal.updateLikedArtist(lar_users_userID,lar_artists_artistID);
    
    res.json('Successfully updated');

}

const createNewLikedArtist = async (req, res) => {
    const {lar_artists_artistID}=req.body
    const {userID}=req.user
    // Confirm data
    if (!userID || !lar_artists_artistID) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
        const LikedArtist = await likedArtistDal.createNewLikedArtist( lar_artists_artistID,userID )
        if(LikedArtist)
        {
            res.status(201).json({ message: 'New LikedArtist created' })
        }
        else{
            res.status(400).json({
                message: 'Invalid LikedArtist data received'
            })
        }
    
         
    
}

const deleteLikedArtist=async (req,res)=>{
    const {lar_users_userID,lar_artists_artistID}=req.body
    await likedArtist.destroy({
        where: {
            lar_users_userID: lar_users_userID,
            lar_artists_artistID:lar_artists_artistID
        }
      });
      res.json('Successfully deleted');
}

module.exports = {
    //getAllLikedSongs,
    updateLikedArtist,
    createNewLikedArtist,
    deleteLikedArtist,
    getLikedArtistByUserID
    
}