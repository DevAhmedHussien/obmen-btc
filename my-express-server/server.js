const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001; // Choose a port number

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));
app.options('/form-data', cors(corsOptions));


let userX = []
// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.get('/',(req,res)=>{
    res.send('hey serever 1 obmenik y')
})
app.get('/hussien',(req,res)=>{
    res.send('hey hussien bro')
})
app.get('/hussien',(req,res)=>{
    res.status(200).send('hey hussien bro')
})


app.get('/form-data',(req,res)=>{
    res.send(userX)
    // console.log('showen')
})
// Define a route to handle POST requests from your React app
app.post('/form-data', (req, res) => {
    const formData = req.body;
    userX.push(formData)
  // Handle the form data, e.g., save it to a database
    res.send('Form data received successfully.');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

