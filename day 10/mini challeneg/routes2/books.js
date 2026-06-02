import express from 'express';

const booksRouter = express.Router();

booksrouter.get('/',(req,res)=>{
    res.send('books routed thank you');
});

export default booksRouter;