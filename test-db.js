const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lci2022023_db_user:VuwQ6JnnaTFtSxFg@cluster0.6qoo0i2.mongodb.net/blogDB")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ Connection error:", err));
