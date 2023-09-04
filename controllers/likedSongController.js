const db = require('../models/index')
const LikedSong = db.likedsong
const likedsongDal = require("../dal/likedSong-db-accessor");


// const getAllLikedSongs = async (req, res) => {
   
//     const likedsongs = await LikedSong.findAll({})
    
//     if (!likedsongs?.length) {
//         return res.status(400).json({ message: 'No likedsongs found' })
//     }
//     res.json(likedsongs)
// }
const getLikedSongByUserID = async (req, res) => {

   const { userID } = req.user
     res.json(await likedsongDal.getLikedSongByUserID(userID));
}

const updateLikedSong=async (req,res)=>{
    const {ls_users_userID,ls_songs_songID} = req.body
    
        await likedsongDal.updateLikrdSong(ls_users_userID,ls_songs_songID);
    
    res.json('Successfully updated');

}

const createNewLikedSong = async (req, res) => {
    console.log("in server")

    const { ls_songs_songID } = req.body
    const {userID} = req.user

console.log(ls_songs_songID)
console.log(userID)
    //const { ls_users_userID,ls_songs_songID } = req.body
    // Confirm data
    if (!userID || !ls_songs_songID) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
        const likedsong = await likedsongDal.createNewLikedSong( ls_songs_songID ,userID)
        if(likedsong)
        {
            res.status(201).json({ message: 'New likedsong created' })
        }
        else{
            res.status(400).json({
                message: 'Invalid playlist data received'
            })
        }    
}

const deleteLikedSong=async (req,res)=>{
    console.log("---------------------------------------------------------------------------------")
    //const {ls_users_userID,ls_songs_songID}=req.body
    const { ls_songs_songID } = req.body
    const {userID} = req.user


    await LikedSong.destroy({
        where: {
            ls_users_userID: userID,
            ls_songs_songID:ls_songs_songID
        }
      });
      res.json('Successfully deleted');
}

module.exports = {
    //getAllLikedSongs,
    updateLikedSong,
    createNewLikedSong,
    deleteLikedSong,
    getLikedSongByUserID
    
}