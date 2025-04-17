import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandle.js";
import sendToken from "../utils/sendToken.js";
import bcrypt from "bcrypt"

import XLSX from 'xlsx'; // ✅ Default import for ES modules
import fs from 'fs';

export const register = async (req, res) => {
  const { name, email, mobile, whatAppNo, lname, password } = req.body;

  console.log("Registering user:", name, email, mobile, whatAppNo, lname, password);

  try {
    const existingUser = await User.findOne({ email }); // Correct usage with await and filter

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }


    const isPasswordHash = await bcrypt.hash(password, 10)

    const user = await User.create({ name, lname, email, mobile, whatAppNo, password: isPasswordHash });

    sendToken(user, 200, res)

    // res.status(201).json({
    //   success: true,
    //   message: "User registered successfully",
    //   data: user,
    // });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body
  // checking if user has given password and email both
  try {

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Please Enter Email & Password"
      })
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Invalid email or password"
      })
      // return next(new ErrorHandler("Invalid email or password", 401));
    }


    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Password does not match"
      })
      // return next(new ErrorHandler("Password does not match", 403))
    }

    sendToken(user, 200, res)
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }

}


export const logout = async (req, res) => {
  // const { name, email, mobile, whatAppNo, lname, password } = req.body;

  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};


export const getAllUser = async (req, res) => {
  try {
    const users = await User.find(); // 🔥 await is important

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Users Not Found",
      });
    }

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching users",
    });
  }
};


export const updateUser = async (req, res) => {
  const { name, email, mobile, whatAppNo, lname } = req.body;

  console.log("update user:", name, email, mobile, whatAppNo, lname);
  console.log("update Id kya hia bhai:", req.params.id);

  const user = await User.findById(req.params.id);
  console.log(user)
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does Not exite"
    })
  }

  try {


    const response = await User.findByIdAndUpdate(req.params.id, { name, email, mobile, whatAppNo, lname })
    return res.status(200).json({
      success: true,
      response,
      message: "User Updated Successfully !!"

    })
    // res.status(201).json({
    //   success: true,
    //   message: "User registered successfully",
    //   data: user,
    // });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};


export const deleteUser = async (req, res) => {
  const id = req.body
  console.log(id)
  const user = await User.findById(req.params.id);
  console.log(user)



  await user.deleteOne();

  res.status(200).json({
    success: true,
      message:"User Deleted successfully",
});

}




export const bulkExcelUpload = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Excel file is required.",
      });
    }

    // Read and parse Excel
    const workbook = XLSX.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const users = [];

    for (let [index, row] of sheetData.entries()) {
      const { name, lname, email, mobile, whatAppNo } = row;

      if (!name || !lname || !email || !mobile || !whatAppNo) {
        throw new Error(
          `Missing field in row ${index + 2} - All fields are required.`
        );
      }

      users.push({
        name: name.trim(),
        lname: lname.trim(),
        email: email.trim(),
        mobile: mobile.toString().trim(),
        whatAppNo: whatAppNo.toString().trim(),
      });
    }

    // ✅ Insert all users in DB
    const insertedUsers = await User.insertMany(users);

    // 🧹 Delete uploaded file
    fs.unlinkSync(file.path);

    return res.status(200).json({
      success: true,
      message: `${insertedUsers.length} users inserted successfully.`,
      data: insertedUsers,
    });
  } catch (error) {
    console.error("Excel Upload Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong.",
    });
  }
};