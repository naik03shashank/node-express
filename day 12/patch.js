import express from 'express';

const app=express();

app.use(express.json());

let books=[{
    title:'Atomic',
    author:'James'
},
{
    title:'Atomic',
    author:'James'
}]

// get alll routes\
app.get('/',(req,res)=>{
    res.send("hello routes");
})

// get all books
app.get('/books',(req,res)=>{
    res.json(books);
})

// now update the book using patch instead of put
app.patch('/books/:id',(req,res)=>{
const pick=books[req.params.id];

if(!pick){
    res.status(404).json({message:'book not found'});
}
object.assign(pick,req.body);


res.status(200).json({message:'book updated successfully',books});  

app.listen(3000,()=>{
    console.log('server is running on port 3000');      

}) });