const {verifyToken, verifyTokenandAuth, verifyTokenandAdmin} = require("./verifyToken");
const router = require("express").Router()
const Product = require("../models/Product")

//CREATE
router.post("/", verifyTokenandAdmin, async (req, res) => {
 const newProduct = new Product(req.body)
   try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
   }catch (e) {
      res.status(500).json('Failed to create product')
   }
})


//Update
router.put("/:id" , verifyTokenandAdmin, async  (req,res)=>{
        try{
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
                $set : req.body
            }, {new:true})
            res.status(200).json(updatedProduct)
        }catch(err){
            res.status(500).json("Failed To Update New Changes")
        }
    }
)

//Delete
router.delete("/:id", verifyTokenandAdmin, async (req, res)=>{
    try{
        await Product.findByIdAndRemove(req.params.id)
        res.status(200).json('Successfully Deleted Product')
    }catch(e)
    {
        res.status(500).json("Could not delete Product")
    }

})

//GET Product
router.get("/find/:id", async (req, res)=>{
    try{
        const product =  await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(e)
    {
        res.status(500).json("Failed to get product")
    }

})


//GET ALL PRODUCTS
router.get("/", async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category
    try{
        let products;
        if(qNew){
         products = await Product.find().sort({createdAt : -1}).limit(5);
        } else if(qCategory) {
            products = await Product.find({
                categories :{
                    $in : [qCategory]
                }
            })
        }else{
            products = await Product.find()
        }

        res.status(200).json(products)
    }catch(e)
    {
        res.status(500).json("Could not get products")
    }

})


module.exports = router