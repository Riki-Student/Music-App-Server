const { playlist, song, playlists2song } = require('../models/index');
const db = require('../models/index')
const Playlist = db.playlist
const Playlists2song = db.playlists2song;

const getAllPlaylists = async () => {
    
    const playlists = await Playlist.findAll({})
 
    return playlists
}
const getAllPlaylists2Songs = async (playlistID) => {
    const songs = await Playlists2song.findAll({})
    return songs
}



const getPlaylistsByUserID=async (userID)=>{
    const playlists=await Playlist.findAll({where:{p_users_userID:userID},
        attributes:['playlistsID','playlistTitle'],
    });
    return playlists;

    }



    const updatePlaylist=async (playlistsID,playlistTitle)=>{

        await Playlist.update({playlistTitle:playlistTitle},{where:{playlistsID:playlistsID}});
    
    
        }


    const getPlaylistByID= async(playlistsID)=>{

        const playlist = await Playlist.findOne({
            where:{playlistsID:playlistsID},
            attributes:['playlistTitle'],
            include : [{ model: Playlists2song, as: 'songs',where: { p_playlists_playlistID: playlistsID } , attributes:['p_songs_songID'],
        include:[{model:song,as:'songs'}]
        }]})
        return playlist; 

        
    }

    const createNewPlaylist = async (playlistTitle,p_users_userID) => {
        const playlist = await Playlist.create({ playlistTitle,p_users_userID })
        if (playlist) { // Created
            return playlist
        } else {
            return "no playlist created"
            }
        }

    const addSongToPlaylist= async (playlistID,songID)=>{
        console.log("dal");
        console.log(playlistID);
        console.log(songID);
        const playlist2song = await Playlists2song.create({p_playlists_playlistID: playlistID,p_songs_songID:songID })
console.log("created");
        if (playlist2song) { // Created
            return playlist2song
        } else {
            return "no playlist2song created"
            }
    }

    const removeSongFromPlaylist= async (playlistID,songID)=>{
        console.log("in removeSongFromPlaylist dal");
        console.log(playlistID);
        console.log(songID);
        
        await Playlists2song.destroy({where:{p_playlists_playlistID: playlistID,p_songs_songID:songID }})
console.log("delete");
       
            return "Successfully deleted"
    }

        const deletePlaylist=async (id)=>{
            console.log("in deletePlaylist");
            await playlists2song.destroy({where:{p_playlists_playlistID:id}})
            await Playlist.destroy({
                where: {
                    playlistsID: id
                }
              });
              return "Successfully deleted"
        }
    




module.exports = {
    getPlaylistsByUserID,
    updatePlaylist,
    getPlaylistByID,
    getAllPlaylists,
    createNewPlaylist,
    deletePlaylist,
    addSongToPlaylist,
    getAllPlaylists2Songs,
    removeSongFromPlaylist
    
}