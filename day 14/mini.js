import express from 'express';

const app=express();

// get all routes
app.get('/',(req,res)=>{
   throw new Error('definitely fucked up server')
});

// error handling using middleware
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).json({
        txt:'fuck off btich'

    })
});

app.listen(3000,()=>console.log('Server is running on port 3000')); 
