import React, {useEffect, useState} from 'react';
import {Button, Container, Center, Text, Flex, Grid, GridItem, HStack, TableContainer, Thead, Th, Tr, Tbody, Td, Image, Table, Spacer} from '@chakra-ui/react';
import { BsCircle } from 'react-icons/bs';
import './Conclusion.css';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Conclusion = ({likedSongs, spotifyApi}) => {
    const [likedSongsCompleteData, setLikedSongsCompleteData] = useState([]);
    const navigate = useNavigate();

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

    const goHome = () => {
        navigate('/')
    }

    return (
        <div class ="conc-page" style={{position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'beige'}}>
            <Center
        h="90vh">
            
        <Container
                borderBottomWidth={'6px'}
                borderRight={'8px'}
                borderLeft={'2px'}
                borderTop={'2px'}
                
                borderColor={'black'}
                borderRadius={'20px'}
                padding={0}
                marginBottom={'10px'}
                overflow={'auto'}
                
                w={'90vw'}
                bg={'#ABC9CD'}
                maxHeight={'90%'}
                maxWidth={'100%'}
                >
                    
            <Grid
                
                templateRows='repeat(22, 1fr)'
                templateColumns='repeat(5, 1fr)'
                
                >
                    
                <GridItem colSpan={5} rowSpan={1} borderBottomWidth={'2px'} borderBottomColor={'black'}
                    h='50px' > 
                    <Grid
                        templateColumns={'repeat(3,1fr)'} gap={6}
                        >
                                <HStack
                                ml={4}>
                                    <BsCircle/>
                                    <BsCircle/>
                                    <BsCircle/>
                                </HStack>
                                
                            
                            <GridItem minWidth="280px" w="280px">
                                <Text class="landing-page-title"> <Center>Liked Songs </Center></Text>
                            </GridItem>
                            
                            <GridItem mt={1} mr={1} placeContent={'center'}>
                            <Flex>
                                <Spacer/>
                                <Button fontFamily={'Lato'}
                                        fontSize={'15px'}
                                        colorScheme='green' onClick={goHome}
                                        borderWidth={1}
                                        borderColor={'black'}>Home</Button>
                            </Flex>
                            </GridItem>
                                
                            
                    </Grid>  
                </GridItem>
                
                
                <GridItem colSpan={5} rowSpan={21} mr={5} ml ={5}> 
                    <TableContainer>
                        <Table size={'sm'} borderColor={'black'}>
                            <Thead>
                                <Tr>
                                    <Th>Album Cover (Click Me)</Th>
                                    <Th>Name</Th>
                                    <Th>Artist</Th>
                                    <Th>Album</Th>

                                </Tr>
                            </Thead>
                            <Tbody>
                            {likedSongsCompleteData.map(likedSongData => {
                                return (

                                        <Tr key={likedSongData.id}>
                                            <Td>
                                            <a rel="noopener noreferrer" href={likedSongData.external_urls.spotify} target="_blank">
                                                <Center>
                                                <Image
                                                        boxSize='80px'
                                                        src={likedSongData.album.images[0].url}
                                                        alt='Album Cover'/>
                                                </Center>
                                            </a>
                                            </Td>
                                            <Td>
                                                <Text>
                                                    {likedSongData.name}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <Text>
                                                    {likedSongData.artists[0].name}
                                                </Text>
                                            </Td>
                                            <Td>
                                                <Text >
                                                    {likedSongData.album.name}
                                                </Text>
                                            </Td>
                                        </Tr>



                            );
                        })}
                        </Tbody>
                        </Table>
                    </TableContainer>
                </GridItem>
                
            </Grid>
        </Container>
        </Center>
            
                
           
           
    </div>
    )




}

export default Conclusion;
