import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Header.css";
import Modal from '@mui/material/Modal';
//try dialog full screen 
// import Dialog from '@mui/material/Dialog';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';

let logo = ''
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
};

const drawerWidth = 240;
const navItems = ['Услуги', 'Компания', 'Партнеры'];


//try dialog full screen 
// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });
function Header(props) {
    // try dialog full
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
      
    // };

    const handleClose = () => {
        setOpen(false);
    };
//___________________________________
const { window } = props;
const [mobileOpen, setMobileOpen] = React.useState(false);
//MODAL
const [openOB, setOpenOB] = React.useState(false);
// const handleOpenOB = () => setOpenOB(true);
const handleCloseOB = () => setOpenOB(false);

const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
};

const drawer = (
    <Box onClick={handleDrawerToggle} sx={{height:"100vh" ,textAlign: 'center' , backgroundColor:"#001d00"}}>

    {/* //<Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', padding: "15px"} }}
        > */}
             <img  alt="The house from the offer."  src= "https://wwonder.digital/media/images/landing/dw-03.svg" style={{width:"80px" ,paddingTop:"20px"}}/>
        {/* </Typography> */}
    <Divider />
    <List>
        {navItems.map((item) => (
        <ListItem key={item} 
        onClick={()=>{if(item ==='Услуги'){
            setTimeout(()=>{setOpenOB(true)},1000)
            }
        }} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText id='navSide' primary={item} />
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    </Box>
);

const container = window !== undefined ? () => window().document.body : undefined;
return (
    <>
    <Box sx={{ display: 'flex' ,backgroundColor:"#001d00" }}>
    <CssBaseline />
    <AppBar component="nav">
        <Toolbar sx={{ background: "#001d00",boxShadow:"0px 1px 14px 2px #00fe5f"
        }}>
            {/* red */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>

        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', padding: "15px"} }}
        >
             <img  alt="The house from the offer."  src= "https://wwonder.digital/media/images/landing/dw-03.svg" style={{width:"60px"}}/>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
            <Button id='x' key={item} sx={{ color: '#fff' }} onClick={()=>{
                console.log(item)
                if(item ==='Услуги'){
                    setOpenOB(true)
                }else {
                    setOpen(true);
                }
            }} >
                {item}
            </Button>
            ))}
        </Box>
        </Toolbar>
    </AppBar>
    <nav style={{backgroundColor:"#001d00" }}>
        <Drawer 
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display: { xs: 'block', sm: 'none' ,backgroundColor:"#001d00" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        {drawer}
        </Drawer>
    </nav>
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
    </Box>
    </Box>
      {/* MO DEL ABRABOTKA */}
    <Modal //className="modelZayafka"
        open={openOB}
            onClose={handleCloseOB}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="modelZayafka">
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color :'white' }}>
                VASHA ZAYAFKA NORM OBRABOTKA 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 , color :'white' }}>
                WILL SEND U ON UR TELEGRAM TRANZISKAYA 
            </Typography>
            <Button variant="outlined" color="error"   sx={{ mt: 5  }}onClick={handleCloseOB}>
                    cancel
                    </Button>
            </Box>
    </Modal>
    {/* try dialgo full screen
      */}
        {/* <Dialog sx={{background:'black' ,height:"97vh"}}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
    >
        <AppBar sx={{ position: 'relative' ,background:"green"}}>
        <Toolbar>
            <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            >
            <CloseIcon />
            </IconButton >
        </Toolbar>
        </AppBar>
     
    </Dialog> */}
    </>
);
}

Header.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

export default Header;