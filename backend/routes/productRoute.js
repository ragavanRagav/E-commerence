import express from 'express';
import Product from '../models/productModel';
import { getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req,res)=>{

    const products = await Product.find({});
    res.send(products);
});
router.post("/",isAuth,isAdmin, async (req,res)=>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message: 'Product created', data: newProduct});
    }
    return res.status(500).send({message: "Error in Creating Product"});
});

router.get('/:id',async(req,res)=>{
    const product = await Product.findOne({id : req.params.id});
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message : "Product not found"});
    }
});

export default router;