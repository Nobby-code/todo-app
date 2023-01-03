const express = require('express');
require('dotenv').config();
const app = express();

const conn = require('./connection');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}))

var urlEncodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json());



//set ejs view
app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'))



// routes

app.get('/', (req, res)=>{
    // res.sendFile(__dirname + '/index.html')
    res.render('index')
});

// Adding user to the database
app.post('/', (req, res) => {
    var fullname =  req.body.fullname;
    var username =  req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    let sql =  `INSERT INTO users (fullname, username, email, password)
    VALUES (?,?,?,?)`;
    conn.query(sql, [fullname, username, email, password], (err, res)=>{
        if (err){
            console.log(err);
        }
        console.log('Data uploaded');
    })
    console.log(fullname, email, password);
    res.render('index')
})

//User authentication
app.post('/', urlEncodedParser, (req, res) => {
    const { username, passwod } = req.body

    conn.query("SELECT * FROM users WHERE username = ?", [username, passwod], (err, result, fields)=>{
        if (result.length > 0) {
            res.render('todo');
        } else {
            console.log('Nothing to show')
        }
    })
})



// //Insert tasks into database
// app.post('/todo', (req, res) => {
//     var task = req.body.task;

//     var sql = `INSERT INTO tasks (task)
//     VALUES (?);`;
//     conn.query(sql, [task], (err, results) => {
//         if (err) throw err;
//         console.log(results);
//         res.render('todo', {tasks: results});
//     });
    
// });

// // Select tasks from the database 
// app.get('/todo', (req, res) => {
//     var sql = `SELECT * FROM tasks;`;

//     conn.query(sql, (err, results)=>{
//         if (err) console.log(err.message);

//         // console.log(results)
//         res.render("todo", { tasks: results});
//     });
// });

// app.get('/todoList', (req, res) => {
//     res.render("todo");
//   });  

// Adding a new task
app.post('/todoList', (req, res) => {
    var task = req.body.task;

    var sql = `INSERT INTO tasks (task)
    VALUES (?);`;
    conn.query(sql, [task], (err, results) => {
        if (err) throw err;
        console.log(results);
        res.redirect('/todoList');
    });
});

// Select tasks from the database 
app.get('/todoList', (req, res) => {
    var sql = `SELECT * FROM tasks;`;

    conn.query(sql, (err, results)=>{
        if (err) console.log(err.message);

        res.render("todo", { tasks: results});
    });
});

// Update query
app.get('/todoUpdate', (req, res)=>{
    let sql = `SELECT * FROM tasks WHERE id = ?;`;
    let id = req.query.id;
    conn.query(sql, [id], (err, result)=>{
        if (err) throw err;

        res.render('update', {tasks: result})
    });
});

// update query
app.post("/todoUpdate", (req, res)=>{
    var task = req.body.task;
    var id = req.body.id;

    console.log(id, task);

    let sql = `UPDATE tasks SET task = ? WHERE id = ?;`;

    conn.query(sql, [task, id], (err, result)=>{
        if (err) console.log(err);
        // res.render('todo');

        console.log('Data updated')
        res.redirect('/todoList');
    })
})

// Delete task from database
app.get('/todoDelete', (req, res)=>{
    var sql = `DELETE FROM tasks WHERE id = ?;`;
    var id = req.query.id;

    conn.query(sql, [id], (err, result)=>{
        if (err) console.log(err);
        res.redirect('/todoList')
    })
})
app.get('/contact', (req, res)=>{
    // res.sendFile(__dirname + '/contact.html')
    // console.log(req.query)
    res.render('contact')
});

app.post('/contact', urlEncodedParser, (req, res)=>{
    // res.sendFile(__dirname + '/contact.html')
    console.log(req.body)
    res.render('contact-success', {data: req.body})
});


//using ejs view
app.get('/profile/:name', (req, res)=>{
    // pass data
    var data = {age: 27, job: 'Developer', hobbies: ['Eating', 'fighting', 'fishing']};
    res.render('profile', { person: req.params.name, data: data});
})

app.listen(3002, (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Listening on port 3002')
})