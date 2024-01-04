
const axios = require('axios');

exports.home = (req, res) => {
    // Make a get request to /api/prod
    axios.get('http://localhost:3000/api/prod')
        .then(function(response){
            res.render('index', { prod : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_prod = (req, res) =>{
    res.render('add_prod');
}

