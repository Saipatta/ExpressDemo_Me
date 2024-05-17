let express=require('express')
var app= express()
app.get('/json',(req,res)=>{
    // res.send("hyderabad")
    res.status(200).json({name:"sai",branch:"cs"})
    //sending the json content
})

app.get('/js',(req,res)=>{
    // res.send("hyderabad")
    res.status(200).send('<h1> Hello World</h1>')
    //sending the json content
})


// to know the ports that are currently running on our system we have to use netstat -an | find "LISTEN"

// the localhost depictly uses 127.0.0.1 (loopback adddress).
app.listen(3500,()=>console.log("server is running"))
// app.post('/',(req,res)=>{
//     res.status(400).send("hello express")
// })
// app.put('/',(req,res)=>{
    // res.send("hello express")
// })

// FOR DYNAMIC PAGES


// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index', { title: 'Home' });
// });
// app.listen(3000,()=>console.log("server is running"))