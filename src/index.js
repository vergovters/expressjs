import express from "express";
import usersRouter from "./routes/users.js"; 
import productsRouter from "./routes/products.js";
import passport from "passport";
import mongoose from "mongoose";


const app = express();

mongoose.connect("mongodb://localhost/expressjs").then(()=>console.log("conected to db"))
app.use(express.json());
app.use(usersRouter);
app.use(productsRouter);
app.use(cookieParser("cookcook"));
app.use(
    session({
        secret: "anson the dev",
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
});
console.log(`Running on Port ${PORT}`);

app.get("/", (request, response) => { response.status(201).send({ msg: "Hello" });
});