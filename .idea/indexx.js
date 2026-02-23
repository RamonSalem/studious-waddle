const express = require('express');


const app = express()



app.get('/transactions', (req, res) => {
    console.log('Transactions reached')
})




app.listen(3000, () => {
    console.log('Server running');
});