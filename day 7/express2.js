//ready to move to POST requests + req.body + express.json() next

import express from 'express';

const app=express();

app.use(express.json());// this is a built in middleware that parses incoming JSON requests and puts the parsed data in req.body
//req.body wwe use this when user sends an json file instead of url so in order to us it we use body
app.get('/',(req,res)=>{
    res.send('hello world');

});// get is basically a route to send data to the browser when the browser sends a request to the server it will match the route and send the response back to the client

// send only when routes matches ,sends response back to the client

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('data received');

});// this wont work directly cuz express cant parse json file directly it need middlewware
// JSON
//  ↓
// convert/middleware play crucial role here
//  ↓
// req.body
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});
