const express=require('express')
const path=require('path')
const connection=require('./connection')
const app=express();
const user=require('./routes/book')
app.use(user)
connection();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("serever is running for bookproject.....")
    }
})