const express  = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes")
const app = express();
var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//Database connection
const db = require("./models/database");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database!");
}).catch(err =>{
    console.log("Cannot connect to the database!", err);
    process.exit(1);
});


//simple route
app.get("/", (req,res) => {
    res.json({message: "Welcome to Home application."});
});

// Routes
app.use("/", router)
//set port, listen for requests
const PORT  = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});