import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Sign up function
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        // Save new user to the database
        await newUser.save();
        res.status(201).json({ message: "User created Successfully!" });
    } catch (error) {
        next(error); // Pass the error to the error handler middleware
    }
};

// Sign in function
export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const validUser = await User.findOne({ email });
        if (!validUser) {
            // User not found
            return res.status(404).json({ message: 'User not found!' });
        }

        // Compare the password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            // Invalid password
            return res.status(401).json({ message: 'Wrong credentials!' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Remove password from the user object before sending the response
        const { password: pass, ...rest } = validUser._doc;

        // Set the JWT token as a cookie and return the user data
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json({
                success: true,
                user: rest
            });
    } catch (error) {
        next(error); // Pass the error to the error handler middleware
    }
};
