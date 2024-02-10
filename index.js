const express = require('express')
const app = express()
const port = 5000

// All Data
app.get('/allUserData', (req,res)=>{
    res.send(
        {
            sucess: true,
            status: 200,
            message: "This is the data loaded sucessfully",
            data: [
                {
                    id:1,
                    name:"Deepu",
                    branch: "BCA"
                },
                {
                    id:2,
                    name:"Aman",
                    branch: "BCA"
                },
                {
                    id:3,
                    name:"Moid",
                    branch: "BCA"
                }
            ]
        }
    )
})

// Single Data
app.get('/singleData', (req,res)=>{
    res.send(
        {
            sucess: true,
            status: 200,
            message: "This is the data loaded sucessfully",
            data: {
                id:1,
                name:"Deepu",
                branch: "BCA"
                }
        }
    )
})

app.get('/', (req,res)=>{
    res.send("Server is running")
})

app.listen(port, (err)=>{
    if(err){
        console.log("Error occured",err)
    }
    else{
        console.log("server is running");
    }
})