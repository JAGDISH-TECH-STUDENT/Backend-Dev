import express from "express"

const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

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

let userData=[
    {id:1,name:"amit",age:"23",password:"1233"},
    {id:2,name:"rahul",age:"35",password:"12243"},
    {id:3,name:"ravi",age:"25",password:"1234"},
];

app.get("/users",(req,res)=>{
    res.render("users",{userData});
});
app.post("/api/users",(req,res)=>{
    const {name,password}=req.body;
    let newData={
        id:userData.length+1,
        name,
        password
    }
    userData.push(newData);
    res.redirect("/users");
});
app.get("/api/users/:id", (req, res) => {
    const id =req.params.id;
    console.log(id);
    userData = userData.filter(user => user.id != id);
    res.redirect("/users");
});


app.listen(3000,(req,res)=>{
   console.log("server is running on 3000 Port");
});