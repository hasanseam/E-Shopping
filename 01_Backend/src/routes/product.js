const {Router} = require('express');
const { findById } = require('../databaseMongo/schemas/Product');
const router = Router();
const Product = require('../databaseMongo/schemas/Product');
const multer = require('multer');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload = multer({storage:storage});

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
//TO DO validation
router.post('/add',upload.single('productImage'),(req,res)=>{
    console.log(req.file);
    const {name,quantity} = req.body;
    const newProduct = new Product({name:name,quantity:quantity});
    newProduct.save()
               .then(result=>{
                console.log(result)
                res.sendStatus(201);
               })
              .catch((error)=>console.error("Error while saving product",error));
    
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
//TO DO validation
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