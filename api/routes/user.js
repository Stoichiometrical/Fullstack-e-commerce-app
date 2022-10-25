const {verifyToken, verifyTokenandAuth, verifyTokenandAdmin} = require("./verifyToken");
const CryptoJs = require("crypto-js");
const router = require("express").Router()
const User = require("../models/User")


//Update
router.put("/:id" , verifyTokenandAuth , async  (req,res)=>{
  if(req.body.password){
      req.body.password = CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString();
      }

     try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{
          $set : req.body
      }, {new:true})
       res.status(200).json(updatedUser)
     }catch(err){
         res.status(500).json("Failed To Update New Changes")
     }
    }
    )

//Delete
router.delete("/:id", verifyTokenandAuth, async (req, res)=>{
    try{
        await User.findByIdAndRemove(req.params.id)
        res.status(200).json('Successfully Deleted User')
    }catch(e)
    {
        res.status(500).json(e)
    }

})

//GET USER
router.get("/find/:id", verifyTokenandAdmin, async (req, res)=>{
    try{
      const user =  await User.findById(req.params.id)
        res.status(200).json(user)
        const {password , ...others } = user._doc
        res.status(200).json({others})
    }catch(e)
    {
        res.status(500).json(e)
    }

})


//GET ALL USERS
router.get("/", verifyTokenandAdmin, async (req, res)=>{
    const query = req.query.new
    try{
        const users =  query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
        res.status(200).json(users)
    }catch(e)
    {
        res.status(500).json("Could not get users")
    }

})

//GET USER STATS
router.get("/stats", verifyTokenandAdmin, async (req, res)=>{
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    try{
     const data = await User.aggregate([
         { $match : { createdAt : { $gte :  lastYear } } },
         {
             $project : {
                 month : { $month : "$createdAt" } ,
             }
         },
         {
             $group : {
                 _id : "$month",
                 total : { $sum: 1 }
             },
         },

     ]);
     res.status(200).json(data)
    }catch (e) {
        res.status(500).json("This request failed")
    }
})



module.exports = router