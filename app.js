require('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
app.use (express.json());
const port = process.env.PORT;

// app.listen(port , async() => {                                       
//     mongoose.connect(process.env.MONGO_DB_URL)                      // Online Database
//     mongoose.connect('mongodb://127.0.0.1:27017/project')           // Local Database

//     .then(() => console.log('DB is Connected..'))
//     .catch(err => console.log(err.message));
//     console.log('Server start at http://localhost:7777');
// });


// ROUTES:-     

// Admin Routes
const usersRoute = require('./Src/Routes/index.routes');
app.use('/api/user', usersRoute);

async function main() {
    mongoose.connect(process.env.MONGO_DB_URL)
}
main()
    .then(() => console.log('DB Is Connected...'))
    .catch( err => console.log(err.message))

app.listen(port , async() => {
    console.log(`Server start at http://localhost: ${port}`); 
})