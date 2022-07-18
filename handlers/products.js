
const fs=require("fs");
const products=require("../products.json")

let productsdata=[];




const createProduct=async(req,res)=>{
    let {product}=req.body;
    const jsonString = JSON.stringify(product)
    productsdata=[...productsdata,product]
   fs.writeFile('../products.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  })
   res.send({
    message:"product added",
    data:product
   })

}

const getAllProducts=async(req,res)=>{
    fs.readFile("../products.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        res.send({productsdata:JSON.stringify(jsonString)})
      }); 
}

const updateProduct=async(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let {product}=req.body;
    productsdata.map((item)=>{
       if(item.id===id){
             item=product;
       }
    })
  res.send({message:"item updated",data:product}) 
}

const deleteProduct=async(req,res)=>{
    let {id}=req.params;
    let index=-1;
    console.log(id);
    productsdata.find((item,i)=>{
      if(item.id===id){
        index=i;
        return true;

      }
      return false;
    })
    if(index==-1){
        return res.status(404).send("No such product");
    }
    productsdata.splice(index,1);

     res.send({message:"item deleted"}) 
}

module.exports={
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}