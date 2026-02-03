import express from "express"

const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/user",(req,res)=>{
    let user={
        name:"Jagdish",
        age:21
    }
    res.render("user",{user});      // binding

});
app.get("/list",(req,res)=>{
    
    let arr=["mongo","orange","banana"]
   
         res.render("list",{arr});
})

app.listen(3000,(req,res)=>{
   console.log("server is running on 3000 Port");
});