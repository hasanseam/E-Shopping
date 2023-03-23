const {Router} = require('express');
const router = Router();

//TO DO: Database will added
const categories = [
    {
        id: 1,
        name: "mobile"
    },
    {
        id:2,
        name:"laptop"
    }
];

const products = [
    {
        id:1,
        name:"Iphone 11",
        quantity:50,
        category: 1
    }
];

//products {GET}
router.get('',(req,res)=>{
    res.send(products);
})

// products/:id {GET}
router.get('/id/:id',(req,res)=>{
    const {id} = req.params;
    const product = products.find((product)=>product.id === parseInt(id));
    res.send(product);
})

router.get('/category/:id',(req,res)=>{
    const {id} = req.params;
    const filteredProducts = products.filter((product)=>product.category===parseInt(id));
    res.send(filteredProducts);
})

// products {POST}
router.post('',(req,res)=>{
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.sendStatus(200);
})

module.exports = router;