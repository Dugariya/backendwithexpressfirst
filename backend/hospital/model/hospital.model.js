const { default: mongoose } = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    doctors: [{ type: mongoose.Schema.ObjectId, ref: "Doctor" }],
    patients: [{ type: mongoose.Schema.ObjectId, ref: "Patient" }],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
