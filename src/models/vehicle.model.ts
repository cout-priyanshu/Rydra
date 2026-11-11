import mongoose, { Model, Schema } from "mongoose";

export type VehicleType = "bike" | "car" | "loading" | "truck" | "auto";

export interface IVehicle {
  owner: mongoose.Types.ObjectId;
  type: VehicleType;
  vehicleModel: string;
  number: string;
  imageUrl?: string;
  baseFare?: number;
  pricePerKM?: number;
  waitingCharge?: number;
  status: "approved" | "pending" | "rejected";
  rejectionReason?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const vehicleSchema = new Schema<IVehicle>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["bike", "car", "loading", "truck", "auto"],
      required: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    vehicleModel: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    baseFare: {
      type: Number,
      default: 0,
    },
    pricePerKM: {
      type: Number,
      default: 0,
    },
    waitingCharge: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["approved", "rejected", "pending"],
      default: "pending",
    },
    rejectionReason: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Vehicle: Model<IVehicle> =
  mongoose.models.Vehicle || mongoose.model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;