const {verifyToken, verifyTokenandAuth, verifyTokenandAdmin} = require("./verifyToken");
const router = require("express").Router()
const Cart = require("../models/Cart")

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch (e) {
        res.status(500).json('Failed to create Cart')
    }
})




//Update
router.put("/:id" , verifyTokenandAuth , async  (req,res)=>{
        try{
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
                $set : req.body
            }, {new:true})
            res.status(200).json(updatedCart)
        }catch(err){
            res.status(500).json("Failed To Update New Changes")
        }
    }
)

//Delete
router.delete("/:id",verifyTokenandAuth , async (req, res)=>{
    try{
        await Cart.findByIdAndRemove(req.params.id)
        res.status(200).json('Successfully Deleted Cart')
    }catch(e)
    {
        res.status(500).json("Could not delete Cart")
    }

})

//GET USER Cart
router.get("/find/:id", verifyTokenandAuth, async (req, res)=>{
    try{
        const cart =  await Cart.findOne(req.params.id)
        res.status(200).json(cart)
    }catch(e)
    {
        res.status(500).json("Failed to get Cart")
    }

})


//GET ALL CartS
router.get("/",  verifyTokenandAdmin, async (req, res)=>{
    try{
        const carts = await  Cart.find()
        res.status(200).json(carts)
    }catch(e)
    {
        res.status(500).json("Could not get Carts")
    }

})


module.exports = router