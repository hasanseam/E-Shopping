const {Router} = require('express');
const { findById } = require('../databaseMongo/schemas/Product');
const router = Router();
const Product = require('../databaseMongo/schemas/Product');

//products {GET}
router.get('/',async (req,res)=>{
    const products = await Product.find();
    res.send(products);
});

// products/:id {GET}
router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.send(product); 
    } catch (error) {
        res.send(error);
    }

});

// products/add {POST}
router.post('/add',(req,res)=>{
    const {name,quantity,model} = req.body;
    const newProduct = new Product({name:name,quantity:quantity,model:model});
    newProduct.save()
              .catch((error)=>console.error("Error while saving product",error));
    res.sendStatus(200);
});

//product delete
//TO DO validation
router.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    Product.deleteOne({_id:id})
           .then((result)=>{res.sendStatus(200)})
           .catch((error)=>{res.status(`Error: ${error}`)})
});

//product update
router.patch('/edit/:id',async (req,res)=>{
    const {id} = req.params;
    const updatePortion = req.body;
    try {
        const product  = await Product.findById(id);
        const updatedPorducts = Object.assign(product,updatePortion);
        updatedPorducts.save();
        res.send(updatedPorducts);
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})


module.exports = router;