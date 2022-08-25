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
                
                
                <GridItem colSpan={5} rowSpan={3} marginRight={5}> 
                    <Text class="pitch">
                        This is the About Page!
                        Will fill in more Later

                        Made by Meredith, Deepti, and Greg :D

                    </Text>
                </GridItem>
        
            </Grid>
        </Container>
        </Center>

    )

}

export default About;