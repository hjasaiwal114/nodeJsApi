import express from "express";
import mongoose from "mongoose";


const app =  express();

const router = express.Router();

router.pos

// Using Middlewares
app.use(express.json());


mongoose
    .connect("mongodb://127.0.0.1:27017", {
        dbName: "backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", schema)
    

app.get("/", (req, res)=> {
    res.send("Nice working");
}); 


app.post("/users/all", async (req, res) => {

    const {name,email,password} = req.body;

  await User.create({
    name: "Abhi",
    email: "abhishek@gmail.com",
    password: "djkand",
  })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully",
    });
});



app.get("/userid/:id", async (req, res)=> {
    const { id } = req.query;
    // const user =  await User.findById(id);
    console.log(req.params);
    res.json({
        success: true,
        user: {},
    });
});

app.listen(4000, () => {
    console.log("Server is working");
});

