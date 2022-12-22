const express =  require('express')
const bodyParser =  require('body-parser')
const mysql = require('mysql')


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//database connection
const con = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "todo-db",
});

con.getConnection((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("mysql database connected....")
    }
});

//ad user to the databse
app.post('/register', (req, res) => {
    con.query('INSERT INTO users (fullname, username, email, password) VALUES (?,?,?,?', 
    [fullname, username, email, password], 
    (err, result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    });
})

//port listening
app.listen(port, () => {
    console.log(`Listen on port ${port}`)
});