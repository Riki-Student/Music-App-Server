const db = require('../models/index')
const Song = db.song
const { Op } = require('sequelize');

const getSongByGenre=async (genreID)=>{
    const songs=await Song.findAll({where:{genrers_genreID:genreID}});
    console.log(songs);
    return songs;

    }

    const getSongByDate=async ()=>{
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      
        const today = new Date();
      
        // Find songs where dateReleased is within the specified range
        const songs = await Song.findAll({
          where: {
            dateReleased: {
              [Op.between]: [oneMonthAgo, today], // Within the last month, including today
            },
          },
        });
      
        console.log(songs);
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
            getSongByDate
            //allUsers
        }