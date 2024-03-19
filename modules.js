// __________________ Sync/Blocking ______________________

// const os = require("os");
// const path = require("path");
// const { readFileSync } = require("fs");
// const { setFlagsFromString } = require("v8");

// const pepe = readFileSync("boys/children.txt","utf-8")

// console.log(pepe)

// writer = require('fs').writeFileSync

// writer("boys/menyyyy.txt",`meny sucks ${pepe}`,{flag :'w'})


//______________________________ Async/Non-blocking ____________________

// const { error } = require("console");
// const {readFile , writeFile } = require("fs");

// readFile("boys/girls/men.txt","utf-8", (err, result) =>{
//     if(err){
//         console.log("There is a mistake " + err);
//         return;
//     }
//     writeFile("boys/girls/newMen.txt",` I am a copy of this ${result}`,{flag:"w"},(err)=>{
//         if(err){
//             return err;
//         }
        
//     });
// })


