const { default: mongoose } = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    specialization: [{ type: String }],
    gender: {
      type: String,
      enum: ["M", "F", "O"],
    },
    hospital: {
      type: mongoose.Schema.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
