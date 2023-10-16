
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from 'react';
import { TextField } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { BtcContext } from './Context/BtcContext';
import './Home.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
//button actio 
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';


const style = {    
boxShadow:"0px 5px 35px 11px #11a541",
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 700,
borderRadius:7,
textAlign:'center',
bgcolor: '#232222',
border: 'none',
p: 4,
scrollBehavior:'smooth',
overflowY:"scroll",
scrollbarFaceColor: "#000000",
scrollbarShadowColor: "#2D2C4D"
}

const xy = {    
    boxShadow:"0px 5px 35px 11px #11a541",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    borderRadius:7,
    textAlign:'center',
    bgcolor: '#232222',
    border: 'none',
    p: 4,
    };

//pattern 
const namePattern = /^[A-Za-z\-']+$/;
const telegramUsernamePattern = /^@[A-Za-z0-9_]{5,32}$/;
const btcAddressPattern = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

export default function Home(){

    //context x 
    let x = useContext(BtcContext)
        //state imputs value
        let [valueB,setB] = useState({
            firstName:'',
            secondName:'',
            telegram:'',
            address:'',
            valueOfB:'',
            // ourMony: valueB*x
        })
   //ERROR MSG
    const [errorMessage, setErrorMessage] = useState('');
    //SHOW snakBar
    let initial = {
        openS: false,
        vertical: 'top',
        horizontal: 'center',
    }
    const [state, setState] = useState(initial);
    const { vertical, horizontal, openS } = state;
    const handleCloseS = () => {
        setState({ ...state, openS: false });
    };


    // email js 
    const form = useRef();
    //sumbit form 
    const sendEmail = async(e) => {
        e.preventDefault();
        if (!namePattern.test(valueB.firstName)) {
            setErrorMessage('Invalid first name');
            console.log(namePattern.test(valueB.firstName))
            return;
            }
        
            if (!namePattern.test(valueB.secondName)) {
                setErrorMessage('Invalid last name');
                return;
            }
        
            if (!telegramUsernamePattern.test(valueB.telegram)) {
                setErrorMessage('Invalid Telegram username');
                return;
            }
        
            if (!btcAddressPattern.test(valueB.address)) {
                setErrorMessage('Invalid Bitcoin wallet address');
                return;
            }
            if (valueB.valueOfB <= 0) {
                setErrorMessage(' write positive number');
                return;
            }
            // Define the CORS configuration
        // const corsConfig = {
        //     headers: {
        //     'Content-Type': 'application/json', // Set the content type of your request
        //     'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
        //     },
        // };
        //     try {
        //         const response = await axios.post('http://localhost:3001/form-data'
        //         , valueB 
        //         , corsConfig );
        //         console.log('Form data submitted successfully:', response.data);
        //         // Reset the form or perform any other actions you need.
        //     } catch (error) {
        //         console.error('Form data submission failed:', error);
        //     }
                setErrorMessage('Success');
                setSuccess(true)
            
        };
    //animated button s
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = React.useRef();

    const buttonSx = {
        ...(success ? {
        bgcolor: green[500],
        '&:hover': {
            bgcolor: "#2fb059",
        },
        }:{
            bgcolor:'#a07438',
            color:'white',
            '&:hover': {
                bgcolor: "#2fb059",
            }
        }),
    };

    useEffect(() => {
        return () => {
        clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
        }, 2000);
        }
        setState({ ...initial, openS: true });
        if(errorMessage === 'Success'){    
            setOpen(true)
            console.log(errorMessage)
        }else{
            setOpen(false)
            //  setB({
            //     firstName:'',
            //     secondName:'',
            //     telegram:'',
            //     address:'',
            //     valueOfB:''
            // })
            console.log(errorMessage)
            console.log(namePattern.test(valueB.firstName))
        }
    };
    
    // Modal 1 
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    // modal 2 
    const [openOB, setOpenOB] = useState(false);
    const handleCloseOB = () => setOpenOB(false)


    return(

        <div className="countainerHome" >
    <Typography variant="h3" gutterBottom sx={{textAlign:"center" ,    margin: "0px 0px 26px" , cursor: "pointer"}}>
    Обмен  <span style={{color:"#009232"}}> денег </span>
    </Typography>

    <hr style={{ width: "164px",position: "relative",bottom: "20px",boxShadow: "1px 2px 8px 3px #11a541", cursor: "pointer"}}/>
    {/* form to send email js  */}
    <form ref={form} onSubmit={sendEmail}>
        <div  className="countaineTextField" >
            <TextField  name="user_firstName"
                InputProps={{className:'textField_border'}} 
                InputLabelProps={{
                                className: 'textfield_label',
                                shrink: true,
                                
                            }}
                sx={{width:"370px"}}
                    id="outlined-number"
                    label="Фамилия"
                    type="text"
                    onChange={(e)=>{
                            setB({...valueB,firstName:e.target.value}) 
                    }}
                    value = {valueB.firstName}
                    />
            <TextField sx={{width:"370px"}} name="user_secondName"
                    id="outlined-number"
                    label=" Имя"
                    type="text"
                    variant="outlined"
                InputProps={{className:'textField_border'}} 
                InputLabelProps={{
                                className: 'textfield_label',
                                shrink: true,
                                
                            }}
                            onChange={(e)=>{
                                setB({...valueB,secondName:e.target.value}) 
                            }}
                    value = {valueB.secondName}/>
        </div>
        <div className="countaineTextField" >
            <TextField  sx={{width:"370px" }} name="user_address"
                    id="outlined-number"
                    label="Bitcoin-адрес"
                    type="text"
                    variant="outlined"
                InputProps={{className:'textField_border'}} 
                InputLabelProps={{
                                className: 'textfield_label',
                                shrink: true,
                                
                            }}
                    onChange={(e)=>{
                        setB({...valueB,address:e.target.value})
                    }}
                        value = {valueB.address}/>   
            <TextField sx={{width:"370px"}} name="user_telegram"
                    id="outlined-number"
                    label="Телеграмм"
                    type="text"
                    variant="outlined"
                InputProps={{className:'textField_border'}} 
                InputLabelProps={{
                                className: 'textfield_label',
                                shrink: true,
                            }}
                            onChange={(e)=>{
                                    setB({...valueB,telegram:e.target.value})
                            }}
                        value = {valueB.telegram}/>  
        </div>                
        <div className="countaineTextField" >
            <TextField sx={{width:"370px"}} name="user_bit"
                id="outlined-number"
                label="Битовая монета"
                type="number"
                variant="outlined"
            InputProps={{className:'textField_border'}} 
            InputLabelProps={{
                            className: 'textfield_label',
                            shrink: true,
                            
                        }}
                onChange={(e)=>{
                    setB({...valueB,valueOfB:e.target.value})
                }}
                value = {valueB.valueOfB}/>
            <TextField sx={{width:"370px" }} name="user_rubel"
                id="outlined-number"
                label="Рубель"
                type="type"
                variant="outlined"
            InputProps={{className:'textField_border'}} 
            InputLabelProps={{
                            className: 'textfield_label',
                            shrink: true,
                            
                        }}
                value = {(valueB.valueOfB*x).toFixed(2)}/>
                
        </div>
        <div style={{display:'flex',justifyContent:"center" , marginTop:'20px'}}>
            {/* <Button id="dd" variant="contained" color="success"
            //  type='sumbit'
            sx={{margin: "30px 0 80px 0"}}
            disabled = {dis}  
            onClick={()=>{
                // setState({ ...initial, openS: true });
                // if(errorMessage === 'Success'){    
                //     setOpen(true)
                //     console.log(errorMessage)
                // }else{
                //     setOpen(false)
                //      // setB({
                //     //     firstName:'',
                //     //     secondName:'',
                //     //     telegram:'',
                //     //     address:'',
                //     //     valueOfB:''
                //     // })
                //     console.log(errorMessage)
                // }
            }} 
            >Обмен</Button>
             */}
            
        <Box sx={{ display: 'flex', alignItems: 'center' ,margin: "30px 0 80px 0" 
        }}>
        <Box sx={{ m: 1, position: 'relative'}}>
            <Fab 
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
            type='sumbit'
            >
            {success ? <CurrencyRubleOutlinedIcon   /> : <SendOutlinedIcon />}
            </Fab>
            {loading && (
            <CircularProgress
                size={68}
                sx={{
                color: errorMessage === 'Success' ? green[500] : '#d1a554a1',
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
                }}
            />
            )}
        </Box>
        <Box sx={{ m: 1, position: 'relative' }}>
            <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
            type='sumbit'
            >
            {errorMessage !== 'Success' || '' ? "Обмен" :  "Го" }
            </Button>
            {loading && (
            <CircularProgress
                size={24}
                sx={{
                color: errorMessage ==='Success' ? green[500] : '#d1a554a1',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
                }}
            />
            )}
        </Box>
        </Box>
        </div>
    </form>
    {/* modal to show zayafka  */}
        <Modal //className="modelZayafka"
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className="modelZayafka" >
            <Typography id="modal-modal-title" variant="h4" component="h4" sx={{color:'white'}}>
            Привет <span style={{color:'green'}}> { valueB.firstName} { valueB.secondName}</span> 
            </Typography>
            {/* <Typography  variant="h4" component="h6" sx={{color:'white', textAlign:"center", marginTop:2}}>
            ℹ️ Информация о Вашем обмене:
            </Typography> */}
            
            <Typography id="modal-modal-title" variant="h6" component="h4" sx={{color:'white', textAlign:"left" ,marginTop:2}}>
            ↙️ Сумма покупки: {valueB.valueOfB} BTC<br/>
            📮 Адрес: {valueB.address}<br/>
            💵 Сумма к оплате:{(valueB.valueOfB*x).toFixed(2)}₽<br/>
            💳 Реквизиты для оплаты: xxxx xxxx xxxx xxxx<br/>
            <hr/>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" sx={{color:'white', textAlign:"left", marginTop:2}}>
            Оплата производится через любые платежные системы: QIWI,СБЕР,ТИНКОФФ
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" sx={{color:'white', textAlign:"left" ,marginTop:2}}>
            ℹ️ После успешного перевода денег по указанным реквизитам нажмите на кнопку 
            «✅Я оплатил(а)» <br/>
            или же Вы можете отменить данную заявку нажав на кнопку
            «❌Отменить заявку»
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" sx={{color:'white', textAlign:"left" ,marginTop:2}}>
            </Typography>
            <div style={{display:"flex"
            ,justifyContent:"center",gap:25, marginTop:55}}> 
                <Button type='Sumbit' variant="contained" color="success" value="Send"
                onClick={()=>{
                    // emailjs.sendForm('service_gufllpi', 'template_t5psxh4', form.current, 'Oq8h-9gW4i-CXe746')
                    // .then((result) => {
                    //     console.log(result.text);
                    //     console.log('succeful')
                    // }, (error) => {
                    //     console.log(error.text);
                    //     console.log('errorrrrrrrrrrrrr')
                    // })
                    const sendData = async()=>{
                        const sendingForm = {
                            firstName : valueB.firstName,
                            secondName:valueB.secondName,
                            telegram:valueB.telegram,
                            btcWallet:valueB.address,
                            btc:valueB.valueOfB,
                            rub:(valueB.valueOfB * x)
                        }
                        console.log(sendingForm.rub)
                        const corsConfig = {
                        headers: {
                        'Content-Type': 'application/json', // Set the content type of your request
                        'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
                        },
                    };
                        try {
                            const response = await axios.post('http://localhost:3001/create'
                            ,sendingForm    //valueB 
                            , corsConfig );
                            console.log('Form data submitted successfully:', response.data);
                            // Reset the form or perform any other actions you need.
                        } catch (error) {
                            console.error('Form data submission failed:', error);
                        }
                    }
                    sendData()
                    setTimeout(()=>{
                    setOpen(false)}
                    ,2000)
                    setB({
                        firstName:'',
                        secondName:'',
                        telegram:'',
                        address:'',
                        valueOfB:''
                    })
                    setTimeout(()=>{
                        setOpenOB(true)
                    },3000)
                    
                }}
                    >✅Я оплатил
                </Button>
                <Button variant="outlined" color="error" onClick={handleClose}>
                    ❌Отменить заявку
                </Button>
            </div>
        </Box>
        </Modal>
    {/* MODEL ABRABOTKA */}
        <Modal //className="modelZayafka"
        open={openOB}
            onClose={handleCloseOB}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={xy} className="modelZayafka">
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'green', textAlign:"center" ,marginTop:3}}>
            ВАША ЗАЯФКА НОРМ ОБРАБОТКА
            </Typography>
            <Typography id="modal-modal-description" sx={{color:'white', textAlign:"left" ,marginTop:3}}>
                {valueB.firstName} <br/>
                мы отправим вам в телеграм этот перевод<br/>
                адресc : {valueB.address} <br/>
                ⏳  Заявка действительна: 25 - 130 минут.  <br/>
            </Typography>
            <Button variant="outlined" color="error"  sx={{color:'white', textAlign:"left" ,marginTop:5}} onClick={handleCloseOB}>
                    cancel
                    </Button>
            </Box>
        </Modal>
        {/* snak bar */}
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openS}
            onClose={handleCloseS}
            key={vertical + horizontal}>
            <Alert onClose={handleCloseS} severity={errorMessage !== 'Success'?"error":"success"}
                sx={{ width: '100%' }}>
            {valueB.firstName} :: {errorMessage}
        </Alert>
        </Snackbar>
    </div>
    )
}