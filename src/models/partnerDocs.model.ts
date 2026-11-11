import mongoose, { Model, Schema } from "mongoose";

export type VehicleType = "bike" | "car" | "loading" | "truck" | "auto";

export interface IPartnerDocs {
  owner: mongoose.Types.ObjectId;
  aadharUrl:string,
  rcUrl:string,
  licenseUrl:string,
  status: "approved" | "pending" | "rejected";
  rejectionReason?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const partnerDocsSchema = new Schema<IPartnerDocs>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    aadharUrl:String,
    rcUrl:String,
    licenseUrl:String,
    status: {
      type: String,
      enum: ["approved", "rejected", "pending"],
      default: "pending",
    },
    rejectionReason: {
      type: String,
    },
  },
  { timestamps: true }
);

const PartnerDocs: Model<IPartnerDocs> =
  mongoose.models.Vehicle || mongoose.model<IPartnerDocs>("PartnerDocs", partnerDocsSchema);

export default PartnerDocs;