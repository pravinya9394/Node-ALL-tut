const express= require('express');
const app=express();
const db=require("../src/db/conection");
const MensRankings=require('../src/models/mens')
const port=process.env.PORT||3000;
const router=require('../src/routers/men')
// very imp to convert body payload in josn
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Connection is live at port ${port}`);
})