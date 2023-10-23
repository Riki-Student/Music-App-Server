const db = require('../models/index')
const Song = db.song

const getSongByGenre=async (genreID)=>{
    const songs=await Song.findAll({where:{genrers_genreID:genreID}});
    return songs;

    }



const getSongByAlbum=async (albumID)=>{

    const songs=await Song.findAll({where:{s_albums_albumID:albumID}});
    return songs;

    }

    const getSongByArtist=async (artistID)=>{

        const songs=await Song.findAll({where:{s_artists_artistID:artistID}});
        return songs;
    
        }

        module.exports = {
            getSongByGenre,
            getSongByAlbum,
            getSongByArtist,
            //allUsers
        }