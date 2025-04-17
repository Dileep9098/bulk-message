// import express from "express"
// import { bulkExcelUpload, deleteUser, getAllUser, login, logout, register, updateUser } from "../controllers/userController.js";
// import isAuthenticateUser from "../utils/auth.js"
// const router=express.Router()

// import multer from "multer"

// const bulkExcelStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, 'uploads/'));
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: bulkExcelStorage });

// router.route("/register").post(register)
// router.route("/login").post(login)
// router.route("/logout").get(logout);
// router.route("/get-all-user").get(getAllUser);
// router.route("/update-user/:id").put(updateUser);
// router.route("/delete-user/:id").delete(deleteUser);

// router.route("/admin/bulk-upload-excel").post(upload.single("file"),bulkExcelUpload)

// export default router



import express from "express";
import path from "path";
import multer from "multer";
import {
  bulkExcelUpload,
  deleteUser,
  getAllUser,
  login,
  logout,
  register,
  updateUser,
} from "../controllers/userController.js";

import isAuthenticateUser from "../utils/auth.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Multer setup for Excel upload
const bulkExcelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Optional: restrict only Excel files
const excelFileFilter = (req, file, cb) => {
  const allowedTypes = [".xls", ".xlsx"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only Excel files are allowed!"));
  }
};

const upload = multer({
  storage: bulkExcelStorage,
  fileFilter: excelFileFilter,
});

// ------------------- Routes -------------------
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/get-all-user").get(getAllUser);
router.route("/update-user/:id").put(updateUser);
router.route("/delete-user/:id").delete(deleteUser);

// 🔥 Main Route: Excel Upload
router
  .route("/admin/bulk-upload-excel")
  .post( upload.single("file"), bulkExcelUpload);

export default router;
