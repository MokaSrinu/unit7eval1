const express=require("express");
const { createProduct, getAllProducts, updateProduct,deleteProduct } = require("./handlers/products");
const getwebsiteIp = require("./handlers/website");

const app=express();

app.use(express.json());

app.post('/getmeip',getwebsiteIp);
app.post('/products/create',createProduct);
app.get('/products',getAllProducts);
app.patch('/products/:id',updateProduct);
app.delete('/products/:id',deleteProduct);

app.listen(3001,()=>{
    console.log("Server running on http://localhost:3001");
})