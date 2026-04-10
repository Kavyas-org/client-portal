const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");
const { protect } = require("./adminRoutes");

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

/* =========================
   ADD USER (with image + tracking)
========================= */
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const { name, refId, passport, dob, salary, status } = req.body;

    // ✅ validation
    if (!name || !refId || !passport) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ duplicate check
    const exists = await User.findOne({ refId });
    if (exists) {
      return res.status(400).json({ message: "Reference ID already exists" });
    }

    const user = new User({
      name,
      refId,
      passport,
      dob,
      salary,
      status: status || "Pending",

      // ✅ default tracking steps
      tracking: [
        { title: "Signed offer letter", status: "Pending" },
        { title: "IMM 1295 issued", status: "Pending" },
        { title: "Work permit activation", status: "Pending" }
      ],

      image: req.file ? req.file.filename : ""
    });

    await user.save();
    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET ALL USERS
========================= */
router.get("/", protect, async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET USER BY ID (IMPORTANT FIRST)
========================= */
router.get("/id/:id", protect, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET USER BY REF ID (PUBLIC)
========================= */
router.get("/:refId", async (req, res) => {
  try {
    const user = await User.findOne({ refId: req.params.refId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   UPDATE USER (status + tracking)
========================= */
router.put("/:id", protect, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   DELETE USER
========================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;