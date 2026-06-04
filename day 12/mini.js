import express from 'express';

const app=express();

app.use(express.json());

// let me create a student data
let students=[{
    name:'john',
    age:20
},
{
    name:'jane',
    age:23
}];

// get all routes
app.get('/',(req,res)=>{
    res.send("hello there students");
})
// get all students
app.get('/students',(req,res)=>{
    res.json(students);
});

// now use patch to update student 
app.patch('/students/:id',(req,res)=>{
    const student=students[reeq.params.id];

    if(!student){
        res.status(404).json('hey there fuck off ')
    }

    Object.assign(student,req.body);
    app.listen(3000,()=>{
        console.log("hello");
    })
})

