const express = require('express');


const app = express();

app.use(express.json);


const transactionsCache = [];



app.get('/transactions', (req, res) => {
    
    console.log('get Transactions reached');
     res.status(200).send(transactionsCache);
})


app.post('/transactions', (req, res) => {

    const {description, amount} = req.body;
    
    console.log('Transactions added');
    transactionsCache.push({description, amount});
    res.status(200).send('Created');
})





app.listen(3000, () => {
    console.log('Server running');
});