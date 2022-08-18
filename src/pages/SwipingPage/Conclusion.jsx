import React, {useEffect, useState} from 'react';
import './Conclusion.css';

const Conclusion = ({likedSongs, spotifyApi}) => {
    const [likedSongsCompleteData, setLikedSongsCompleteData] = useState([]);
    

    // for (let i = 0; i < likedSongs.length; ++i){
    //     let songInfo = spotifyApi.getTrack(likedSongs[i]); 
    //     console.log(likedSongs[i]);
    //     <div className="song-wrapper">
            
    //         <p id="song-name"> {songInfo.name} </p>
                    
    //     </div> 
    // }

   


    useEffect(() => {
        Promise.all(likedSongs.map(songid => spotifyApi.getTrack(songid))).then(results => {
            setLikedSongsCompleteData(results);
        });
    }, []);

    useEffect(() => {
        console.log("conslucion thing updated", likedSongsCompleteData);
    }, [likedSongsCompleteData]);

    if (likedSongs.length === 0){
        return(
        <div style={{position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'beige'}}>
            <p>You didn't like any songs!</p>
        </div>)
    }

    return (
        <div class ="conc-page" style={{position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'beige'}}>
            
            <div class ="slider">
            <p class="center-title">Here are your liked songs!</p>
                
            {likedSongsCompleteData.map(likedSongData => {
                return (
                    <div key={likedSongData.id}>
                        <div class = "lastPlaylist">
                            <p id="id-name"> {likedSongData.name}</p>
                            <a rel="noopener noreferrer" href={likedSongData.external_urls.spotify} target="_blank"><img id = "album-image" src={likedSongData.album.images[0].url} /></a>
                            <p class = "artists" id="artists-title"> artist(s) </p>
                            <p class = "artists" id="artists">{likedSongData.artists[0].name}</p>
                            <p class = "album" id="album-title">album</p> 
                            <p id="album-name">{likedSongData.album.name}</p>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    )




}

export default Conclusion;
