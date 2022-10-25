const jwt = require("jsonwebtoken")

 const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token ;
     const token = authHeader.split(" ")[1];
     if(authHeader){
        jwt.verify(token,process.env.JWT_SECRET,(err ,user)=>{
            if(err) res.status(403).json("Token invalid");
            req.user = user;
            next()

        })
     }else{
         return res.status(401).json("You are not authenticated")
     }

 }

 const verifyTokenandAuth =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id=== req.params.id || req.user.idAdmin){
                next();
            }else{
            res.status(403).json("Authorization Failed");
        }
    })
 }

const verifyTokenandAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if( req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Authorization Failed");
        }
    })
}


 module.exports = { verifyToken , verifyTokenandAuth , verifyTokenandAdmin }