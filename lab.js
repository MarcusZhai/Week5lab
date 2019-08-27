let express = require('express');
let app = express();
let bodyParser=require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let db =[]


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('images')); 
app.use(express.static('css'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/views/"+"index.html");
});

app.get ('/addNewTask',function(req,res){
    res.sendFile(__dirname+"/views/"+"newTask.html");
});

app.post('/data',function(req,res){
    console.log(req.body);
    db.push(req.body);
    console.log("ahha");
    
    console.log(db);
    
    res.sendFile(__dirname+"/views/"+"taskList.html");
})

app.get ('/listTasks',function(req,res){

    res.render(__dirname+"/views/"+"taskList.html",{
        task:db
    })
});


app.listen(8080);