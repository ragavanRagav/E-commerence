import jwt, { decode } from 'jsonwebtoken'
import config from './config'
const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },config.JWT_SECRET,{
        expiresIn: '48h',
      });
  };
  const isAuth = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
      const onlyToken = token.slice(7,token.length);
      jwt.verify(onlyToken,config.JWT_SECRET,(err,decode)=>{
        console.log(" token: "+onlyToken);
        if(err){
          return res.status(201).send({msg:'Invalid Token'});
        }
        req.user = decode;
        return next();
      });
    }else{
      return res.status(401).send({msg:'Token is not supplied'});
    }
  }
  const isAdmin =(req,res,next)=>{
    console.log(req.user.isAdmin);
    if(req.user && req.user.isAdmin){
      return next();
    }
    return res.status(401).send({msg:'Admin Toke is not valid'});
  }
export {getToken,isAuth,isAdmin}