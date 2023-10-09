import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import moment from  'moment';
import { useState,useEffect } from 'react';
import './Main.css';
import { useContext } from 'react';
import { BtcContext } from './Context/BtcContext';
import img1 from "./images/pngaaa.com-1675120.png"

export default function Main(){

    let x = useContext(BtcContext)
    let [date,setDate] = useState('')

    useEffect(()=>{
        let date = moment().format('MMMM Do YYYY, h:mm a')//moment().format('MMMM Do YYYY, h:mm:ss a');
        setDate(date)
    },[date])
    return(
        <>
        <Container className="countainer"  maxWidth="xl" sx={{marginTop:"-50px", display:'flex', height:"96vh",
        justifyContent:'space-around',alignItems:"center", backgroundColor:"#001d00", //alignItems:"center",
        padding:3}}>
            <div >
                <div style={{marginTop:"-60px"}}>
                    <Typography variant="h6" gutterBottom >
                    <span style={{color:'white'}}>date:</span> <span style={{color:"#f3d57a"}}>{date}</span>
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                    <span style={{color:'white'}}>Курс:</span> {x && <span style={{color:"#f3d57a"}}>Bitcoin (BTC) Price in RUB: {x}</span>}
                    </Typography>
                    {/* {ethereumPrice && <p>Ethereum (ETH) Price in RUB: {ethereumPrice}</p>} */}````
                </div>
            <img  alt="The house from the offer." 
            src= "https://wwonder.digital/media/images/landing/dw-04.svg" 
            style={{ width: "90%"
                    ,paddingTop: "20px"}}/>
            <Typography variant="h" gutterBottom sx={{color: "#00fe5f"}}>
            Креативная IT компания
            </Typography> 
            </div>
            <div >
                <img id='ok' alt="" src={img1}></img>
            </div>
        </Container>
        </>
        
    );
}