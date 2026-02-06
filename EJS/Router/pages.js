import express from 'express'
const router=express.Router();
import userData from '../data.js'
router.get("/",(req,res)=>{
    res.render("index");
});
router.get("/users",(req,res)=>{
    res.render("users",{userData});
});

router.get("/editpage/:id",(req,res)=>{
    const id =req.params.id;
   const user = userData.find(user => user.id == id);
    res.render("edit", {user});

});

export default router;