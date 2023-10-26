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

const fileFIlter = (req,file,cb)=>{
    if(file.mimetype==='image.jpg'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const upload = multer({storage:storage});

//products {GET}
router.get('/',async(req,res)=>{
    console.log("Hello World");
    try {
        const products = await Product.find();
        res.status(200).json({"data":products});
    } catch (error) {
        res.status(500).json({"error":error});
    }
});

// products/:id {GET}
router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(product) res.status(200).json({"data":product})
        else res.status(404).json({"data":"No data found"})
    } catch (error) {
        res.status(500).json({"error":error});
    }
});

// products/add {POST}
//TO DO validation
router.post('/add',upload.single('productImage'),(req,res)=>{
    const {name,quantity} = req.body;
    const newProduct = new Product({name:name,quantity:quantity});
    newProduct.save()
               .then(result=>{
                res.sendStatus(201);
               })
              .catch((error)=>{
                res.status(500).json({"error":error});
              });
    
});

//product delete
//TO DO validation
router.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    Product.deleteOne({_id:id})
           .then((result)=>{res.status(200).json({"message":"deleted"})})
           .catch((error)=>{res.status(500).json({"error":error})});
});

//product update
//TO DO validation
router.patch('/edit/:id',async (req,res)=>{
    const {id} = req.params;
    const updatePortion = req.body;
    try {
        const product  = await Product.findById(id);
        if(product){
            const updatedPorducts = Object.assign(product,updatePortion);
            updatedPorducts.save();
            res.status(200).json({message:"updated",data:updatedPorducts});
        }else{
            res.status(404).json({"message":`No product found with ${id}`})
        }

    } catch (error) {
        res.status(500).json({"error":error});
    }
})


module.exports = router;