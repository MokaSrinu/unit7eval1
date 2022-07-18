
const dns=require("dns");

const  getwebsiteIp=async(req,res)=>{
    let {website_name}=req.body;
    let ip;
    dns.lookup(website_name, (err, address, family) => {
       console.log(address);
       res.send({Ip_address:address})
      });  
}

module.exports=getwebsiteIp;
