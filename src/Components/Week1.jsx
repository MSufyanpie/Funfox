import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Week1CardStyle } from "../Styles/StyleConstants";
import Image1 from '../assets/Images/chracters.png'
import Image2 from '../assets/Images/plot.png'
import Image3 from '../assets/Images/setting.png'
import Image4 from '../assets/Images/problemorconflict.png'
import Image5 from '../assets/Images/resolution.png'
import Image6 from '../assets/Images/paperbackground.png'
import Image7 from '../assets/Images/girl readin.png'

const Week1 = () => {

    const Heading = () => {
        return (
            <Card sx={{ border: '2px dotted #F8D1E0', borderRadius: '20px 20px 20px 20px', backgroundColor: '#FE6784', width: '50vh', height: '4vh' }}>
                <Typography sx={{ fontFamily: 'Short Stack', fontSize: '1.2rem' }} color={'white'} variant="h6">Elements of Story Writing</Typography>
            </Card>
        );
    };

    const CardBody = () => {
        return (
            <>
                <Typography gutterBottom variant="h6" sx={{ fontFamily: 'Short Stack', textAlign: 'justify', marginTop: '2%', fontSize: '0.9rem' }}>
                    Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
                    Over the next week, we will be practicing the different elements of story writing.
                    Our aim is to make stories more interesting and exciting.
                </Typography>

                <Card sx={{ border: '2px dotted #A4FDFB', backgroundColor: '#25A3A1', width: '100%', height: '15vh' }}>
                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <CardContent>
                                <Box>
                                    <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify', fontSize: '0.9rem' }} color={'white'} variant="h6">
                                        There are five elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <img src={Image7} alt="Cover" style={{ width: '10vh', height: '17vh' }} />
                        </Grid>
                    </Grid>
                </Card>

            </>
        );
    };

    const CloudButtons = () => {
        const images = [Image1, Image2, Image3, Image4, Image5];
        return (
            <>
                <Grid container spacing={2} justifyContent="center" paddingTop={'4px'}>
                    {images.map((image, index) => (
                        <Grid item key={index} xs={6} sm={4} md={2}>
                            <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                        </Grid>
                    ))}
                </Grid>
                <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify', marginTop: '4px', fontSize: '0.9rem' }} color={'black'} variant="h6">
                    You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
                </Typography>
            </>
        );
    };

    const LastPara = () => {
        return (
            <>
                <Card sx={{
                    position: 'relative',
                    background: '#FE6784',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 20px -6px rgba(0,0,0,0.8)',
                    width: '100%',
                    height: '17vh',
                    padding: '5px'
                }}>
                    <img src={Image6} alt="Cover" style={{ width: '100%', height: '15vh', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                    <CardContent sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}>
                        <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify', fontSize: '0.9rem' }} color={'black'} variant="h6">
                            For today’s lesson, we will try to understand and practice writing the setting for our stories.
                        </Typography>
                        <Typography sx={{ fontFamily: 'Short Stack', textAlign: 'justify', fontSize: '0.9rem' }} color={'black'} variant="h6">
                            The setting is an important element of every fiction story.
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }

    return (
        <Grid container justifyContent="center">
            <Card sx={Week1CardStyle}>
                <CardContent>
                    <Grid container justifyContent="center">
                        <Heading />
                        <CardBody />
                        <CloudButtons />
                        <LastPara />
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Week1;
