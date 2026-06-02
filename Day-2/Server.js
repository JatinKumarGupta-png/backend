const express = require('express')
const PORT = 5000;
const app = express();

app.get('/', (req, res) =>{
    res.send('MY FIRST SERVER BUILD');
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})