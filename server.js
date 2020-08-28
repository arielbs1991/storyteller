const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dbConfig = require('./config/database.config.js');

const PORT = process.env.PORT || 3000;

const app = express();

//from callicoder demo
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.static("public"));
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the Storyteller API, where we store all of the wondrous creations of our users. To find your own adventure, please visit https://storyteller.herokuapp.com"})
})

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Successfully connected to the database');
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storyteller-api", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
// app.use(require("./routes/api.js"));

const usersController = require("./routes/userRoutes.js");
app.use("/api/users", usersController);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
