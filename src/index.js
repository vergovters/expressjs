import express from "express";
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
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
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
        }),
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
});
console.log(`Running on Port ${PORT}`);
