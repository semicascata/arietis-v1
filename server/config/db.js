const mongoose = require("mongoose");

exports.connectDB = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`Database connected at:
    ${con.connection.host}\n`.yellow.bold);
};
