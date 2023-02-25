const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
const PORT = 8000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/client", blogRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://client02:client02@cluster0.vbfhzwx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
