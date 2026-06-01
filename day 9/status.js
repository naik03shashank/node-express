// we will be learning abt status code and error handling 
//status code is basically a three digit code sent from the server to the client ..
//status code basically tells whether the request was successful or not and if not then what kind of error it is
// let work again  ony book apis
import express from 'express';

const app = express();

let books=[];

app.use(express.json());

const port=3000;

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});

// CREATE
app.post('/books',(req,res)=>{

    books.push(req.body);

    res
      .status(201)
      .send("Book added");

});

// READ ALL// basically to get all books 
app.get('/books',(req,res)=>{

    res.status(200).json(books);

});

// UPDATE
app.put('/books/:id',(req,res)=>{

    if(!books[req.params.id]){

        return res
            .status(404)
            .send("Book not found");

    }

    books[req.params.id]=req.body;

    res
      .status(200)
      .send("Book updated");

});

// if u want to get a single book we hve to use it in it
app.get('/books/:id',(req,res)=>{
    const book=books[req.paraqms.id];
    if(!book){
        res.status(404).send("Book not found");
    }
    else{
        res.status(200).json(book);
    }
})

// if i hve to delete a book
app.delete('/books/:id',(req,res)=>{

    const deleteBook =
        books[req.params.id];

    if(!deleteBook){

        return res
            .status(404)
            .send("Book not found");

    }

    books.splice(req.params.id,1);

    res
      .status(200)
      .send("Book deleted");

});

// mini challenge
app.get('/books/search',(req,res)=>{
    const searchtitl=req.query.title;
    const searchresult=books.filter((book)=>book.title.includes(searchtitl));
    res.status(200).json(searchresult);
});
// this is used when we hve to search a book by its title we use query n filter method
