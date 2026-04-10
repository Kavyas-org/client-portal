const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  refId: String,
  passport: String,
  dob: String,          
  salary: Number,  
  status: {
    type: String,
    default: "Pending"
  },

  // ✅ NEW: tracking steps
  tracking: [
    {
      title: String,
      status: {
        type: String,
        default: "Pending"
      }
    }
  ],

  image: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);