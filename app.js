let express = require('express');
let app = express();
let path = require('path');

let port = 1313;

app.use(express.static('public'));

app.listen(port, () => console.log(`Port running in ${port}\nhttp://localhost:${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
});

app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/product.html'))
})

app.get('/productCart',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/productCart.html'))
})

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/productDetail.html'))
})