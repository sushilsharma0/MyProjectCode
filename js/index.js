const express=require('express');
const app=express();
const port=80;
const host="127.0.0.1";
const path=require('path');
const hbs=require('hbs');
const pug=require('pug');
const newmodel=require("./mongodb")

app.use(express.static('../public'));
const templatepath=path.join(__dirname,'../views')

app.use(express.json())
app.set("view engine",'hbs')
app.set("views",templatepath)
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render("login")
})
app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post("/login-form",async(req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password
    }
    await newmodel.insertMany([data])
    res.render("home")
})
app.post("/sign-up",async(req,res)=>{
    const data=new newmodel(req.body);


    await newmodel.save().then(()=>{
        console.log("successfully saved")
    }).catch(()=>{
        console.log("unsuccessfully aaved ")
    })
    res.render("home")
})

app.listen(port,host,()=>{
    console.log(`successfully connected on http://${host}:${port}`);
})
