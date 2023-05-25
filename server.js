const express = require('express')
const app = express()
app.use(express.json())


let users = [{id:1,name:'Rajesh'},{id:2,name:'Vasanth'}]
let products = [{id:1, productName: "Redmi", price: 20000},{id:2, productName: "iphone", price: 60000}]
let orders = [{id:1, orderName:"samsung", price:25000, user:"rajesh"},{id:2, orderName:"Iphone", price:80000,user: "vasanth"}]

// To get the all Users
app.get('/users', (req,res)=>{
    res.json(users)
})

// To Create a new User
app.post('/user',(req,res)=>{
    users.push(req.body)
    res.json(users)
})

// To delete a user
app.delete('/user/:id',(req,res)=>{
    var data = req.params.id;
    const usersData = users.findIndex(item=>item.id == data)
    users.splice(usersData,1)
    res.json('Delete Success')
})

// To Update the User Information
app.put('/user/:id',(req,res)=>{
    var data = req.params.id;
    const usersData = users.findIndex(item=>item.id == data);
    users[usersData].name = req.body.name
    res.send({message: "update success"})

})


//For Products

// To Get the all product Information
app.get("/products",(req,res)=>{
    res.json(products)
})

// To create a new product
app.post("/product",(req,res)=>{
    products.push(req.body)
    res.json(products)
})

// To delete a product
app.delete('/product/:id',(req,res)=>{
    var data = req.params.id;
    const productData = products.findIndex(item=>item.id == data)
    products.splice(productData,1)
    res.json('Delete Success')

})

// To update the product details
app.put('/product/:id',(req,res)=>{
    var data = req.params.id;
    const productsData = products.findIndex(item=>item.id == data)
    products[productsData].productName = req.body.productName
    res.json({message: "update success"})

})

// For Orders

//To get all the orders
app.get("/orders",(req,res)=>{
    res.json(orders)
})

// To create a new order
app.post("/order",(req,res)=>{
    orders.push(req.body)
    res.json(orders)
})

// To delete a order
app.delete('/order/:id',(req,res)=>{
    var data = req.params.id;
    const ordersData = orders.findIndex(item=>item.id == data)
    orders.splice(ordersData,1)
    res.json('order Delete Success')

})

// To update the order Information
app.put('/order/:id',(req,res)=>{
    var data = req.params.id;
    const ordersData = orders.findIndex(item=>item.id == data)
    orders[ordersData].orderName = req.body.orderName
    res.json({message: "update success"})

})


app.listen(process.env.PORT || 5000);