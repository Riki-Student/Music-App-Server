const db = require('../models/index')
const Album = db.album

const getAllAlbums = async () => {
    console.log("get all albums")
    const albums = await Album.findAll({})
    return albums
}



const getAlbumById=async (albumID)=>{

    const album = await Album.findByPk(albumID);
    return album.albumTitle
    }

    const createNewAlbum = async (albumTitle,artists_artistID) => {
       
        
        const album = await Album.create({ albumTitle, artists_artistID })
        if (album) { // Created
            return  album
        } else {
            return 'no album created' 
    }
}



    module.exports = {
        getAlbumById,
        getAllAlbums,
        createNewAlbum
    }