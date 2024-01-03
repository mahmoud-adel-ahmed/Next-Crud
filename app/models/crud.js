const { mongoose } = require("mongoose");

let CrudSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

export let Crud =
  mongoose.models.CrudItem || mongoose.model("CrudItem", CrudSchema);
