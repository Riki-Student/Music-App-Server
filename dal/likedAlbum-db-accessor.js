const db = require('../models/index')
const likedAlbums = db.likedalbum
const { album } = require('../models/index')


const updateLikedAlbum = async (lal_users_userID, lal_albums_albumID) => {

    await likedAlbums.update({ lal_albums_albumID: lal_albums_albumID }, { where: { lal_users_userID: lal_users_userID } });


}




const createNewLikedAlbum = async (lal_albums_albumID, lal_users_userID) => {
    console.log("in dal");
    console.log(lal_albums_albumID);
    console.log(lal_users_userID);
    const likedAlbum = await likedAlbums.create({ lal_albums_albumID, lal_users_userID })
    console.log("after created");
    if (likedAlbum) { // Created
        return likedAlbum
    } else {
        return "no playlist created"
    }
}



const getLikedAlbumByUserID = async (userID) => {
    const LikedAlbum = await likedAlbums.findAll({
        where: { lal_users_userID: userID },
        attributes: ['lal_albums_albumID'],
        include: [{ model: album, as: 'album' }]
    });
    console.log("in liked album dal");
    return LikedAlbum;
    //  const ids=LikedAlbum.map((album)=>{
    //      return album.lal_albums_albumID;  
    // })
    //  return ids

}
module.exports = {
    updateLikedAlbum,
    getLikedAlbumByUserID,
    createNewLikedAlbum
}