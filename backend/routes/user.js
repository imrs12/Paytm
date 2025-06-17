const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const userRouter = express.Router();
const { User } = require("../db");
const { Salt, JWT_SECRET } = require("./config");
const zod = require("zod");
const { SignupBody } = require("./zod");
const jwt = require("jsonwebtoken")

userRouter.use(express.json());
userRouter.use(cors());

userRouter.post("/signup", async (req, res) => {

    const { success } = SignupBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Email already taken or Invalid Inputs"
        });
        return;
    }

    const ExistingUser = await User.findOne({
        username: req.body.username
    })

    if(ExistingUser){
        res.status(409).json({
            message: "Username already taken"
        });
        return;
    }

    try {
        const hashedpassword = await bcrypt.hash(req.body.password, Salt);

        const user = await User.create({
            username: req.body.username,
            password: hashedpassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });

        if(user){
            const id = user._id;
            const token = jwt.sign({ id }, JWT_SECRET);

            res.status(200).json({
                message: "User created successfully!",
                token: token
            })
            return;
        } 
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong! Try Again"
        })
    }

})

userRouter.post("/signin", async (req, res) => {
    
})

module.exports = userRouter;