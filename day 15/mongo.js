import mongoose from 'mongoose';

mongoose.connect(
'mongodb+srv://shashi2717:shashi@2717@cluster27.3cspbqy.mongodb.net/?appName=Cluster27'
)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});
