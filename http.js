const http = require("http");

const server =  http.createServer((req,res)=>{
    if (req.url === "/"){ 
        res.write("Welcome to our homepage. The backend!!! first time message from the back......");
        res.end();
    }
    else if (req.url === "/about"){
        res.write("We are new here");
        res.end();
    }else{

   

    res.write(`
        <h1>Opps<h1/>
    `)
    res.end(); }
    
    
})

server.listen(60000)
