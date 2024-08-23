const mongoose = require("mongoose");

const uri =
"mongodb+srv://pratapabhishek755:mongoDB@cluster0.3wqrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose;
function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
