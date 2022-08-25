import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Stack, Direction} from 'swing';
import SongCard from './SongCard';
import Conclusion from './Conclusion';
import {BiHeartCircle} from 'react-icons/bi';
import {FaTimesCircle} from 'react-icons/fa';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import './SwipingPage.css';
import { Center,Flex, Grid, GridItem, Spacer } from '@chakra-ui/react';

let SpotifyWebApi = require('spotify-web-api-js');
let spotifyApi = new SpotifyWebApi();

const SwipingPage = () => {
    let location = useLocation();
    const [artistInformation, setArtistInformation] = useState(null);
    const [songArray, setSongArray] = useState(null);
    const [likedSongs, setLikedSongs] = useState([]);
    let navigate = useNavigate();
    const stack = Stack();

    stack.on('throwout', (event) => {
        let swipedDirection = (event.throwDirection == Direction.LEFT ? 'left' : 'right');

        if (swipedDirection === 'right'){
            setLikedSongs([...likedSongs, event.target.id]);
            
        }
        songArray.pop();
        setSongArray([...songArray]);
        
    });

    useEffect(() => {
        // Extract access token from the hash
        let firstHashItem = location.hash.split('&')[0];
        let access_token = firstHashItem.split('=')[1];
        console.log(access_token)

        spotifyApi.setAccessToken(access_token);

        spotifyApi.getUserPlaylists().then(
            function (playlistList) {
                
                // If no playlists exist, let the songArray be empty
                if (playlistList.items.length === 0){
                    setSongArray('empty');
                    return;
                }
                
                // Extract a random playlist id and set randomPlaylistID to it
                let possiblePlaylistIndeces = playlistList.items.length;

                let randomPlaylistId = null;
                for (let index = 0; index < possiblePlaylistIndeces; ++index)
                {
                    if (playlistList.items[index].tracks.total > 0)
                    {
                        randomPlaylistId = playlistList.items[index].id;
                        break;
                    }
                }
                
                // If the playlist has no songs, get songs from top 50 in the US;
                if (randomPlaylistId === null){
                    randomPlaylistId = "37i9dQZEVXbMDoHDwVN2tF";
                }

                spotifyApi.getPlaylist(randomPlaylistId)
                .then(function(playlistData) {
                    // Extract random artists and put it into a pool for seeding
                    let artistIDSet = new Set();
                    let trackIndex = 0;
                    while (artistIDSet.size <= 5 && trackIndex < playlistData.tracks.items.length){
                        for (let index = 0; index < playlistData.tracks.items[trackIndex].track.artists.length; ++index){
                            artistIDSet.add(playlistData.tracks.items[trackIndex].track.artists[index].id);
                        }
                        ++trackIndex;
                    }

                    // Convert the set to an array
                    let artistIDs = Array.from(artistIDSet);

                    // Get the recommended songs
                    spotifyApi.getRecommendations({
                        min_energy: 0.4,
                        seed_artists: artistIDs.slice(0,4),
                        min_popularity: 50
                    }).then(function(data) {
                        setArtistInformation(data);
                    }).catch(function(err){
                        console.log(err);
                    });
                }, function(err) {
                    console.error(err);
                });
            },
            function (err) {
                console.error(err);
                // If the token expires, redirect to the login page
                if (err.statusText === 'Unauthorized') {
                    navigate('/')
                }
            }
        );
    }, []);

    useEffect(function(){
        if(artistInformation === null || artistInformation === 'empty') return;
        console.log("ARTISTINFORMATION HAS CHANGED", artistInformation);
        setSongArray(artistInformation.tracks);
    }, [artistInformation]);


    if(songArray === null) return (<div></div>);
    if(songArray === 'empty') return (<div >You have no playlists! Create one on spotify to use the app!</div>);
    return (
        
        <Grid h="100%"  templateColumns='repeat(3,1fr)' templateRows='repeat(1,1fr)'
        placeContent='center'>
            
            <GridItem justifyContent={'center'} alignContent={'center'}>
                <Grid templateRows='repeat(3,1fr)'
                h="100%">
                <GridItem></GridItem>
                <Flex justifyContent={'center'} alignContent={'center'}>
                        <IoMdCloseCircleOutline size={90} color='#CE3333'/>
                </Flex>
                <GridItem></GridItem>
                </Grid>
            </GridItem>
            <Center>
            <div className="viewport"
                
                >
                <Center>
                <ul className="stack">
                    {songArray.map(function(songInfo){
                        return (
                            <SongCard stack={stack} songInfo={songInfo} />
                        )
                    })}
                </ul>
                </Center>
            </div>
            </Center>
            
            

            <GridItem>
                <Grid templateRows='repeat(3,1fr)'
                h="100%">
                    <GridItem></GridItem>
                    
                    <Flex justifyContent={'center'} alignContent={'center'}>
                        <BiHeartCircle color='#45954C' size={100}/>
                    </Flex>
                <GridItem></GridItem>
                </Grid>
            </GridItem>
            {songArray?.length === 0 && <Conclusion likedSongs={likedSongs} spotifyApi={spotifyApi}/>}
        </Grid>
        
    )
} 
// HOW TO DEPLOY TO GITHUB PAGES
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
export default SwipingPage;