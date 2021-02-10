import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello From Home");

const handleProfile = (req, res) => res.send("Hello From Profile");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(logger("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);