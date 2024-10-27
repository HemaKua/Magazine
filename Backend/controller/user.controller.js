import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';  

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exist" });
        }
        const hashPassword= await bcrypt.hash(password,10)
        const createdUser = new User({
            fullName,
            email,
            password: hashPassword,
        });
       await createdUser.save()
        res.status(201).json({ message: "User uccessfully created", user:{
                _id: createdUser._id,
                fullName: createdUser.fullName,
                email: createdUser.email
              }
    });
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({ message: "Internal server error" });
    }
};
// login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If the login is successful
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
            }
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};