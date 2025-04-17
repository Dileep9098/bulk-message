import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  lname: {
    type: String,
  },
  mobile: {
    type: String,
    required: true, 
  },
  whatAppNo: {
    type: String,
  },
  password: {
    type: String,
    select:false
  },
  
}
, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;
