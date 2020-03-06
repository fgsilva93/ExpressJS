const path = require('path');
const express = require('express');

let app = express(); 

// This is number 3 of the lab...//

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// })

// app.listen(3000); 

//This is number 4 of the lab...//

// app.use(express.static(path.join(__dirname, '../public')));

// app.listen(3000)

//this is number 5 of the lab..//

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next(); 
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);
