let express = require('express');
let app = express();
let path = require('path');

let port = 1300;

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.listen(port, () => console.log(`Port running in ${port}\nhttp://localhost:${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
});
app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/register.html'));
});
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'));
})

