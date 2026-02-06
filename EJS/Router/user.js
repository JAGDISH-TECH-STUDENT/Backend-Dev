import express from 'express'
const router=express.Router();
import userData from '../data.js'
router.post("/users",(req,res)=>{
    const {name,password}=req.body;
    let newData={
        id:userData.length+1,
        name,
        password
    }
    userData.push(newData);
    res.redirect("/users");
});

router.delete("/users/:id", (req, res) => {
    const id =req.params.id;
    userData = userData.filter(user => user.id != id);
    res.redirect("/users");
});

router.put("/users/:id",(req,res)=>{
    const id=req.params.id;
    const {name,password}=req.body;
    const index = userData.findIndex(user => user.id == id);
  if (index !== -1) {
    userData[index] = { id: parseInt(id), name, password };
  }

    res.redirect("/users");
})

export default router;