const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.get ('/', (req, res) => {
    res.send('Hello World');
});
//mongoose.connect('mongodb://localhost:27017/hackjmi', { useNewUrlParser: true, useUnifiedTopology: true }); 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


