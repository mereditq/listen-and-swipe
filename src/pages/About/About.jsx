import './About.css';
import {Container, Center, Text,  Grid, GridItem} from '@chakra-ui/react';

const About = () => {

    return (
        <Center h={'100vh'} >
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
                
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                
                >
                <GridItem colSpan={5} rowSpan={1} borderBottomWidth={'2px'} borderBottomColor={'black'}
                    h='50'        > 
                    <Text class="landing-page-title"> <Center>About </Center> </Text>
                </GridItem>
                
                
                <GridItem colSpan={5} rowSpan={3} ml={5} marginRight={5}> 
                    <Text class="pitch">
                    Listen & Swipe is a web application that uses a user’s Spotify account to suggest songs to the user. After logging into Spotify, the user will be given a set of suggested songs displayed in a card format. If they like the song, they can swipe right on the card, otherwise they can swipe left, similar to Tinder. At the end of the list of songs, they can see the songs they liked compiled in a list. 

                    </Text>
                    <Text class="pitch">
                        Created originally by Meredith & Bashmi, and integrated into a CI/CD pipeline with the help of Deepti and Greg!
                    </Text>
                    <Link src={'https://devpost.com/software/listen-swipe'}>Winner of ZotHacks 2020!</Link>
                    <Link>See Medium Article Here (TBA)</Link>
                </GridItem>
        
            </Grid>
        </Container>
        </Center>

    )

}

export default About;