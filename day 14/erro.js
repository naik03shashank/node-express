//  to handle erros like server crashes
// JSON parsing fails
// database fails
// unexpected bug happens we use error in Middleware

import express from 'express';

const app=expres();

//throwing an normal error
app.get('/',(req,res)=>{
    throw new Error('something went wrong');
});

// error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).json({  message:'internal server error'});
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');  
});