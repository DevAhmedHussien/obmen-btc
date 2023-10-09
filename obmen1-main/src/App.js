import './App.css';
import { Container } from '@mui/material';
import Header from './Header';
import Main from './Main';
import Home from './Home';
import Footer from './Footer';
import {BtcProvider}  from './Context/BtcContext';
import { createTheme,ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography:{
    fontFamily:"IBM"
  }
}) 
function App() {
 
  return (
    <ThemeProvider theme={theme} >
      <div style={{backgroundColor:"#001d00"}}>
      <BtcProvider>
        <Container maxWidth="xl">
          <Header/>
          <Main/>
          <Home/>
        </Container>
       < Footer/>
      </BtcProvider> 
      </div >
    </ThemeProvider>
   
  );
}

export default App;
