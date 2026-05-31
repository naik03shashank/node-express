// let create a simple student api using express
import express from 'express';

const app=express();

app.use(express.json());// this is a built in middleware that parses incoming JSON requests and puts the parsed data in req.body\

let students=[]

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});


// create a route to add a student using post
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send('student added successfully');
});

app.get('/', (req, res) => {
  res.send('Student API is running');
});

// create a route to get all students // view all students using get
app.get('/students',(req,res)=>{
    res.json(students);
});

//update a studwnt using put
app.put('/students/:id',(req,res)=>{
    students[req.params.id]=req.body;
    res.send('student updated successfully');
});

// delete a student using delete
app.delete('/students/:id',(req,res)=>{
    students.splice(req.params.id,1);
    res.send('student deleted successfully');
}   );

