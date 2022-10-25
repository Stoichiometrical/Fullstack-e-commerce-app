const {verifyToken, verifyTokenandAuth, verifyTokenandAdmin} = require("./verifyToken");
const router = require("express").Router()
const Order = require("../models/Order")


//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch (e) {
        res.status(500).json(e)
    }
})

//Update
router.put("/:id" , verifyTokenandAdmin , async  (req,res)=>{
        try{
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
                $set : req.body
            }, {new:true})
            res.status(200).json(updatedOrder)
        }catch(err){
            res.status(500).json("Failed To Update New Changes")
        }
    }
)

//Delete
router.delete("/:id",verifyTokenandAdmin , async (req, res)=>{
    try{
        await Order.findByIdAndRemove(req.params.id)
        res.status(200).json('Successfully Deleted Order')
    }catch(e)
    {
        res.status(500).json("Could not delete Order")
    }

})

//GET USER Order
router.get("/find/:id", verifyTokenandAuth, async (req, res)=>{
    try{
        const orders =  await Order.find(req.params.id)
        res.status(200).json(orders)
    }catch(e)
    {
        res.status(500).json("Failed to get Order")
    }

})


//GET ALL OrderS
router.get("/",  verifyTokenandAdmin, async (req, res)=>{
    try{
        const orders = await  Order.find()
        res.status(200).json(orders)
    }catch(e)
    {
        res.status(500).json("Could not get Orders")
    }

})


///GET MONTHLY INCOME
router.get("/income" , verifyTokenandAdmin, async (req, res)=>{
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date( new Date().setMonth(lastMonth.getMonth()-1))
    try{
        const income = await Order.aggregate([
            { $match : { createdAt : { $gte : previousMonth } } },
            {
                $project : {
                    month : { $month : "$createdAt" } ,
                    sales : "$amount"
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : { $sum: "$sales" }
                },
            },

        ]);
        res.status(200).json(income)
    }catch (e) {
        res.status(500).json("This request failed")
    }
})

module.exports = router