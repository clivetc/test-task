const express = require ('express');
const WebSocket = require ('ws');
const cors = require ('cors');
const http = require ('http');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv');
const connectDB = require ('./config/dbconfig')
const routes = require ('./routes/route');

dotenv.config({path: './config/config.env'});

//the database
connectDB();
//express setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use("/routes", routes);
app.use(bodyParser.json())
const port = 3300;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws){
    console.log('Client Connected');
    ws.send('Welcome New Client');

    ws.on('message', function incoming(message){
        console.log('received: %', message);
        ws.send('Message received', +message)
    });
});
app.use(express.json());
//routes
app.use(routes);


server.listen(port, () => console.log(`http server is listening on http://localhost:${port}`));