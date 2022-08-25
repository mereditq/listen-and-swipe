import './Login.css';


import {Button, Container, Center, Text, Tooltip, Grid, GridItem, HStack} from '@chakra-ui/react';
import { BsCircle } from 'react-icons/bs';
const Login = () => {
    function login(){
		let client_id = '0bb1e801202d4028b044f848af13e749'; // Your client id
        let redirect_uri = window.location.href + 'app/'; // Your redirect uri
        
		let scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative ';

		let url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(scope)}`
		window.location = url;
	}
    return (
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
                
                w={'90vw'}
                bg={'#ABC9CD'}
                >
            <Grid
                
                templateRows='repeat(5, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                >
                    
                <GridItem colSpan={5} rowSpan={1} borderBottomWidth={'2px'} borderBottomColor={'black'}
                    h='50' > 
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
                                <Text class="landing-page-title"> <Center>Listen & Swipe </Center></Text>
                            </GridItem>
                            
                            <Text></Text>
                    </Grid>
                        
                        
                    
                    
                </GridItem>
                
                
                <GridItem colSpan={5} rowSpan={3} mr={5} ml ={5}> 
                    <Text class="pitch">
                    Welcome to Listen & Swipe! </Text>
                    <Text class="pitch">
                    Ever loved a song so much you wanted to swipe right on it? Need a few song recommendations? Here's an app for you! 
                    </Text>
                    <Text class="pitch">
                    With Listen and Swipe, you just need a spotify account and we'll recommend you songs
                    based on your recent playlist history! Swipe the card right if you like the song, and left if you don't.
                    </Text>
                    <Text class="pitch">
                    We'll compile the liked songs into a list for you to see!

                    </Text>
                </GridItem>
                <GridItem colSpan={4} rowSpan={1}></GridItem>
                <GridItem colSpan={1} rowSpan={1} padding ={5}> 
                    <Tooltip placement="right-end">
                        <Button fontFamily={'Lato'}
                        fontSize={'15px'}
                         colorScheme='green' onClick={login}
                         borderWidth={1}
                         borderColor={'black'}>Log In With Spotify</Button>
                    </Tooltip>

                </GridItem>
            </Grid>
        </Container>
        </Center>
    )
}

export default Login;
