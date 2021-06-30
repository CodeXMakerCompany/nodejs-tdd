const express =  require('express');
const todoRoutes = require('./router/todo.routers');
const app = express();

const mongodb = require('./config/db');

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

//Middleware that catch error
app.use((error, req, res, next) => {
    res.status(500).json({message: error.message})
});

app.get('/', (req, res) => {
    res.json("Hello world");
});

app.listen(3002, () => {
    console.log('Server running');
})

module.exports = app;