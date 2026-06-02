import express from 'express';
 import server from './routes/server.js';

 const app=express();

    app.use('/api',server);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}   );