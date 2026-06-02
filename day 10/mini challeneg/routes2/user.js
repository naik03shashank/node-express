import express from 'express';

import booksRouter from './routes2/books.js';

const app=express();

app.use('/books',booksRouter);

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});