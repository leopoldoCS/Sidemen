
/*

Author: Rajvir

Date: 8/13/2025

The code connects to a database via node.js

*/

const express = require('express');
const path = require('path');
const mysql2 = require('mysql2');
const app = express();


const database = mysql2.createConnection({
  host: "hoteldatabase.cx0k04cysbk2.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Comp380DataBase",
  database: "HotelDB"
});

database.connect((error) => {
    if(error)
    {
        return console.error(error)
    }

    console.log("Mysql database is connected....")
})

//MIDDLEWARE FOR PASSING THE FORM DETAILS

app.use(express.urlencoded({extended:true}))

///app.use(express.static(path.join(__dirname, 'Sidemen')));

app.get('/', (req, res) =>{
    const htmlfile = path.join(__dirname, 'SandR.html');
    res.sendFile(htmlfile);
})


app.post('/handleSingle', (req, res)=> 
{
    console.log(req.body);
    res.send('Booking successful');
})



app.listen(4000, () => {
    console.log("Server listening...")
})

