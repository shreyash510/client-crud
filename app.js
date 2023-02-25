const express = require("express");
const mongoose = require("mongoose");
const clientRoute = require("./routes/clientRoute");
var cors = require('cors')

const PORT = 8000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/client", clientRoute);


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
