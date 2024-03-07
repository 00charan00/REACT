const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port=8080;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

//register

app.post('/register',(req,res)=>{
    console.log(req.body);
    const sql="INSERT INTO registertable(`name`,`email`,`password`,`role`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("ERROR");
        }
        return res.json(data);
    })

})

//login

app.post('/login',(req,res)=>{
    const sql="SELECT * FROM registertable WHERE `email` = ? AND `password` = ?";
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        let role=req.body.role;
        if(err){
            return res.json("ERROR");
        }
        if(role==="admin"){
            return res.json("ADMIN");
        }
        if(role==="normaluser"){
            return res.json("USER");
        }
        else{
            return res.json("login Failure");
        }
    })
})



app.get('/',(req,res)=>{
    //function to check if backend is running in browser
    res.json("BACKEND IS WORKING");
})
app.listen(port, () => {
    console.log(`ONLINE IN PORT:${port}`);
});