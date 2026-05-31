// let me create a simple book apis
import express from'express';

const app=express();

app.use(express.json());

let books=[];

app.listen(8000,()=>{
    console.log('server is running on port 8000');
});

//create to add books 
app.post('/books',(req,res)=>{
    books.push(req.body);
    res.send('book added successfully');     
});

app.get('/',(req,res)=>{
    res.send('book api is running');    

});
// create a route to get all books
app.get('books',(req,res)=>{
    res.json(books);    
});


// create a update using update
app.put('/books/:id',(req,res)=>{
    books[req.params.id]=req.body;
    res.send('book updated successfully');  
});


//now have to delete a book from the books
app.delete('/books/:id',(req,res)=>{
    books.splice(req.params.id,1);
    res.send('book deleted successfully');  

});