const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error("DB connection error :", err));

// Import Routes
const PostRoutes = require('./routes/posts');
app.use('/api/posts',PostRoutes);

// Root route
app.get('/',(req,res)=>{
    res.send(__dirname + '/public/index.html');
});

//start the server
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});



// database
// mongodb+srv://lci2022023_db_user:UG7f7wk0ltF9Etsd@cluster0.6qoo0i2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0