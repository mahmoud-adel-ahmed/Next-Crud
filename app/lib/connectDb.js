const { mongoose } = require("mongoose");

export let connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};
