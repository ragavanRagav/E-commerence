import express from 'express';
import Product from '../models/productModel';
import { getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req,res)=>{
    const products = await Product.find({});
    res.send(products);
});
router.post("/",isAuth,isAdmin, async (req,res)=>{
    const products = await Product.find({});
    var i = products.length;
    const product = new Product({
        id: i+ 1,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
    });
    const newProduct = await product.save();
    // console.log();
    if(newProduct){
        return res.status(201).send({message: 'Product created', data: newProduct});
    }
    return res.status(500).send({message: "Error in Creating Product"});
});

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });

  
router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

export default router;