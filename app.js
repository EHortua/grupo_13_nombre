let express = require('express');
let app = express();
let path = require('path');

let port = 1300;

app.use(express.static('public'));

app.listen(port, () => console.log(`Port running in ${port}\nhttp://localhost:${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
});

