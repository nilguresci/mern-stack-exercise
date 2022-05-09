const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //burada type olarak bir şema içinde ki objectid yi alacağını söylüyoruz
      required: true,
      ref: "User", //burada type içinde hangi şemadan id alacağını  anlaması için referans olarak şema adını veriyoruz
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
