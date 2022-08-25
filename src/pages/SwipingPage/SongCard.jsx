import { Center,Flex, Image, Container, Text, Box, Grid, GridItem, Link, Spacer, Divider } from '@chakra-ui/react';
import {useRef, useEffect} from 'react';
import {BiHeartCircle} from 'react-icons/bi';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import './SongCard.css';

const SongCard = ({stack, songInfo}) => {
    const cardRef = useRef(null);

    let imgURL = songInfo.album.images[0].url;
    let artists = songInfo.artists;
    console.log(songInfo);

    useEffect(() => {
        if(cardRef === null) return;
        let card = stack.createCard(cardRef.current);
        return function(){
            card.destroy();
        }
    }, [cardRef, stack]);

    return (
            <li ref={cardRef} id={songInfo.id}>
            <Container
                borderBottomWidth={'6px'}
                borderRight={'8px'}
                borderLeft={'2px'}
                borderTop={'2px'}
                
                borderColor={'black'}
                borderRadius={'20px'}
                padding={0}
                marginBottom={'10px'}
                
             
                bg={'#ABC9CD'}
                >
                    <Grid 
                        templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(1,1fr)'
                        gap={4}>
                            <GridItem h='50' rowSpan={1} colSpan={1}>
                                <Center>
                                    <Text
                                        fontFamily={'Lato'}
                                        fontSize={'xl'}
                                        top="50%"
                                        left="50%"
                                        transform="translateY(-50%, -50%)">
                                            {songInfo.name}
                                    </Text>
                                </Center>
                                
                            </GridItem>
                            <GridItem h='200' rowSpan={3} colSpan={1}>
                                <a rel="noopener noreferrer" href={songInfo.external_urls.spotify} target="_blank"> 
                                    <Center>
                                        <Image
                                                boxSize='200px'
                                                src={imgURL}
                                                alt='Album Cover'/>
                                    </Center>
                                </a>
                                    
                                
                                
                                
                            </GridItem>
                            <GridItem h='50' rowSpan={1} colSpan={1}
                                    >
                                <Text noOfLines={2}>{artists.map(artist => {
                                                        return (
                                                            <div class ="album" id ="artists">
                                                                {artist.name}
                                                            </div>
                                                        );
                                                    })}
                                </Text>
                                <Center>
                                    <Box borderBottomColor={'black'} borderBottomWidth={2} width ={225} />
                                </Center>        
                                
                            </GridItem>
                            <GridItem rowSpan={1} h='70'>
                                <Flex mr={10} ml ={10}>
                                    
                                    <IoMdCloseCircleOutline size='50'/>
                                    <Spacer/>
                                    <AiOutlinePlayCircle size = '50'/>
                                    <Spacer/>
                                    <BiHeartCircle size='50'/>
                                </Flex>
                            </GridItem>
                        </Grid>
                </Container>
            </li>
    )
}

export default SongCard;