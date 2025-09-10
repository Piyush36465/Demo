import express from 'express';
import NodeCache from 'node-cache';

const app = express();
const mycache = new NodeCache();

app.get("/", (req, res) => {
    res.send("Hello students");
});

function myfun(){
    for(let i=1;i<=1000000;i++)
    {
        let x=i*i*i*i*i
    }
    return 100
}

app.get("/checkcache",(req,res)=>{

    if(mycache.has("hundred"))
    {
         console.log("Received from the cache")
        res.send(mycache.get(`hundred`));
    }
    else
    {
        console.log("Key removed from the cache")
        let result=myfun()
        mycache.set("hundred",result,5);
        res.send("key set")
    }

})

app.listen(8080, () => {
    console.log("connected");
});