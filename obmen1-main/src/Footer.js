import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer(){
return(
    <Container maxWidth="xl"  >
        <Typography sx={{backgroundColor:"black" , color:'wheat', padding:2  , boxShadow:"-1px 0px 21px 12px #c1ad7a"}}>
            writen By <span> hussien </span>
        </Typography>
    </Container>
)
}