const { readFile, writeFile } = require("fs");


// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path,"utf8",(err,data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })

//     })
// } 

// getText("mxname.txt")
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err))

 const start = async() =>{
    try{
        const gotten = await getText("mxname.txt")
        const another = await getText("mm.txt")
        console.log(gotten,another)
    } catch (error) {
        console.log("Something went toast")
    }
    
 }

 start()