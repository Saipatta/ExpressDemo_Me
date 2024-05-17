var express=require('express')
var app=express()
const path = require('path');
port=2400

app.get('/send',(req,res)=>
{
    res.sendFile(path.join(__dirname,'publi','sendFile.html'))
})
app.listen(port,()=>{
    console.log(`the server is running at ${port}`)
})