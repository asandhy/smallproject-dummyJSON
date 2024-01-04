
var Goods = require('../model/model');

// Create - Save New Product
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new Product
    const prod = new Goods({
        title       : req.body.title,
        description : req.body.description,
        price       : req.body.price,
		stock       : req.body.stock,
		rating      : req.body.rating,
        image       : req.body.image
    })

    // Save Product Data into the MongoDb database
    prod
        .save(prod)
        .then(data => {
            //res.send(data)
            res.redirect('/add-prod');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// Retrieve and Return All Products/ Retrive and return a Single Product
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Goods.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found Product with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving Product with id " + id})
            })

    }else{
        Goods.find()
            .then(prod => {
                res.send(prod)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

