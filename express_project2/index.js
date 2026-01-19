const express=require('express');
const app=express();
const port=3000;
const user=require('./data');
app.get('/',(req,res)=>{
    res.send('Hello World from Express!');
});

app.get('/userDetails',(req,res)=>{
    res.send(user);                                 // you can use res.json(user) also

});
app.get('/userDetails/:id',(req,res)=>{

    const id=parseInt(req.params.id);
    const userDetails=user.find(u=>u.id===id);
    res.send(userDetails);
});

// add mr in front name router
app.get('/addMr',(req,res)=>{
    const userWithMr=user.map(u=>({...u,name:`Mr ${u.name}`}));
    res.send(userWithMr);
});

app.get('/age',(req,res)=>{
    const userAbove21=user.filter(u=>u.age>21);
    res.send(userAbove21);
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});