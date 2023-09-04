const db = require('../models/index')
const { song } = require('../models/index');
const LikedSong = db.likedsong


const updateLikrdSong=async (ls_users_userID,ls_songs_songID)=>{

    await LikedSong.update({ls_songs_songID:ls_songs_songID},{where:{ls_users_userID:ls_users_userID}});


    }


    const createNewLikedSong = async (ls_songs_songID,ls_users_userID) => {
        console.log("in dal");
        console.log(ls_songs_songID);
        console.log(ls_users_userID);
             const likedSong = await LikedSong.create({ ls_songs_songID,ls_users_userID })
             console.log("after created");
             if (likedSong) { // Created
                 return likedSong
             } else {
                 return "no playlist created"
                 }
             }


const getLikedSongByUserID=async (userID)=>{
    const likedSongs=await LikedSong.findAll({where:{ls_users_userID:userID},
    attributes:['ls_songs_songID'],
    include:[{model:song,as:'song'}]});
    console.log("in liked song dal");
    return likedSongs;
    
    }
    module.exports = {
        updateLikrdSong,
        getLikedSongByUserID,
        createNewLikedSong
    }