// const { createNewLikedArtist } = require('../controllers/likedArtistController');
const db = require('../models/index')
const likedArtist = db.likedartist
const { artist } = require('../models/index')


const updateLikedArtist = async (lar_users_userID, lar_artists_artistID) => {

    await likedArtist.update({ lar_artists_artistID: lar_artists_artistID }, { where: { lar_users_userID: lar_users_userID } });


}
const getLikedArtistByUserID = async (userID) => {
    console.log(userID);
    const LikedArtist = await likedArtist.findAll({
        where: { lar_users_userID: userID },
        attributes: ['lar_artists_artistID'],
        include: [{ model: artist, as: 'artist' }]
    });
    return LikedArtist;

    //     const ids=LikedArtist.map((artist)=>{
    //         return artist.lar_artists_artistID;  
    //    })
    //    return ids

}


const createNewLikedArtist = async (lar_artists_artistID, lar_users_userID) => {
    const LikedArtist = await likedArtist.create({ lar_artists_artistID, lar_users_userID })

    if (LikedArtist) { // Created
        return LikedArtist
    } else {
        return "no playlist created"
    }
}
module.exports = {
    updateLikedArtist,
    getLikedArtistByUserID,
    createNewLikedArtist
}