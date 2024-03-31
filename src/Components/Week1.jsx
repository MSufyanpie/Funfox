import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { Week1CardStyle } from "../Styles/StyleConstants"

const Week1=()=>{
    const Heading=()=>{

        return(
            <Card sx={{border:'2px dotted #F8D1E0',borderRadius:'20px 20px 20px 20px',backgroundColor:'#FE6784',width:'50vh',height:'4vh'}}>
              
                <Typography sx={{fontFamily:'Short Stack'}}  color={'white'} variant="h6">Elements of Story Writing</Typography>
              
            </Card>
        )
    }
    const CardBody=()=>{
        return (
            <>
                <Typography gutterBottom variant="h6"  sx={{fontFamily:'Short Stack',textAlign:'justify',marginTop:'2%'}} >
               Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
               Over the next week, we will be practicing the different elements of story writing.
               Our aim is to make stories more interesting and exciting.
               </Typography>
               <Card sx={{border:'2px dotted #A4FDFB',backgroundColor:'#25A3A1',width:'100%',height:'20vh'}} >
                <Box>
                    <Typography sx={{fontFamily:'Short Stack',textAlign:'justify'}}  color={'white'} variant="h6">
                    There are       elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                    </Typography>
                </Box>
               </Card>

               
               </>
        )
    }
 
    
    return(
        <Grid container justifyContent="center" >
          
           <Card sx={Week1CardStyle}>
            <CardContent>
             <Grid container justifyContent="center">
               <Heading/>
               <CardBody/>
             </Grid>
            </CardContent>
           </Card>
          
        </Grid>
        
        
    )
}
export default Week1