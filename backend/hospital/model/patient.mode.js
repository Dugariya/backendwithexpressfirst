const { default: mongoose } = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    disease: [{ type: String }],
    age: {
      type: Number,
    },
    address: {
      type: String,
    },
    appointment: {
      doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor",
      },
      hospital: {
        type: mongoose.Schema.ObjectId,
        ref: "Hospital",
      },
      time: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
