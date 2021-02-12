import mongoose from "mongoose";

mongoose.connect(
    "mongodb://localhost:27017/sootube", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connect to DB");
const handleError = (error) => console.log(`Error occur  `);

db.once("open", handleOpen);
db.on("error", handleError);