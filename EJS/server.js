import express from "express"
import methodOverride from 'method-override'
const app=express();
import pageRoute from "./Router/pages.js"
import userRoute from "./Router/user.js"
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use("/page",pageRoute);
app.use("/api",userRoute);



// app.get("/user",(req,res)=>{
//     let user={
//         name:"Jagdish",
//         age:21
//     }
//     res.render("user",{user});      // binding

// });

// app.get("/list",(req,res)=>{
    
//     let arr=["mongo","orange","banana"]
   
//          res.render("list",{arr});
// })


// app.get("/api/users/:id", (req, res) => {
//     const id =req.params.id;
//     console.log(id);
//     userData = userData.filter(user => user.id != id);
//     res.redirect("/users");
// });





app.listen(3000,(req,res)=>{
   console.log("server is running on 3000 Port");
});