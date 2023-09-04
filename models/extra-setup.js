const { sequelize } = require("./sequelize");
const applyExtraSetup = () => {
    const { album, artist, genre, likedalbum, likedartist, likedsong, mood, mood2genre,playlist, playlists2song, song, user } = sequelize.models;
    //album from artist
    album.belongsTo(artist, { foreignKey: "artists_artistID", as: "artistID" });
    artist.hasMany(album, { foreignKey: "artists_artistID", as: "albums" });
    //playlist from user
    playlist.belongsTo(user, { foreignKey: "p_users_userID", as: "userID" });
    user.hasMany(playlist, { foreignKey: "p_users_userID", as: "playlists" });
    //song from:
        //genre
    song.belongsTo(genre, { foreignKey: "genrers_genreID", as: "genreID" });
    genre.hasMany(song, { foreignKey: "genrers_genreID", as: "songsG" });
        //album
    song.belongsTo(album, { foreignKey: "s_albums_albumID", as: "albumID" });
    album.hasMany(song, { foreignKey: "s_albums_albumID", as: "songaAL" });
        //artist
    song.belongsTo(artist, { foreignKey: "artists_artistID", as: "artistID" });
    artist.hasMany(song, { foreignKey: "artists_artistID", as: "songsAR" });
    //liked albums from:
        //album
    likedalbum.belongsTo(album, { foreignKey: "lal_albums_albumID", as: "album" });
    album.hasMany(likedalbum, { foreignKey: "lal_albums_albumID", as: "likedalbumsA" });
        //user
    likedalbum.belongsTo(user, { foreignKey: "lal_users_userID", as: "userID" });
    user.hasMany(likedalbum, { foreignKey: "lal_users_userID", as: "likedalbumsU" });
    //liked artists from:
        //artist
    likedartist.belongsTo(artist, { foreignKey: "lar_artists_artistID", as: "artist" });
    artist.hasMany(likedartist, { foreignKey: "lar_artists_artistID", as: "likedartistsA" });
        //user
    likedartist.belongsTo(user, { foreignKey: "lar_users_userID", as: "userID" });
    user.hasMany(likedartist, { foreignKey: "lar_users_userID", as: "likedartistsU" });

    //liked songs from:
        //user
    likedsong.belongsTo(user, { foreignKey: "ls_users_userID", as: "userID" });
    user.hasMany(likedsong, { foreignKey: "ls_users_userID", as: "likedsongsU" });

       //song

    likedsong.belongsTo(song, { foreignKey: "ls_songs_songID", as: "song" });
    song.hasMany(likedsong, { foreignKey: "ls_songs_songID", as: "likedsongsS" });


    //mood2genres from:

      //mood
    mood2genre.belongsTo(mood, { foreignKey: "mood_moodID", as: "moodID" });
    mood.hasMany(mood2genre, { foreignKey: "mood_moodID", as: "mood2genreM" });

    //genre
    mood2genre.belongsTo(genre, { foreignKey: "genres_genreID", as: "genreID" });
    genre.hasMany(mood2genre, { foreignKey: "genres_genreID", as: "mood2genreG" });


    //playlist2song from:

    //song
    playlists2song.belongsTo(song, { foreignKey: "p_songs_songID", as: "songs" });
    song.hasMany(playlists2song, { foreignKey: "p_songs_songID", as: "playlist2songS" });

    //playlist
    playlists2song.belongsTo(playlist, { foreignKey: "p_playlists_playlistID", as: "playlistID" });
    playlist.hasMany(playlists2song, { foreignKey: "p_playlists_playlistID", as: "songs" });


    };
module.exports = { applyExtraSetup };