import mongoose, { Model, Schema } from "mongoose";

export type VehicleType = "bike" | "car" | "loading" | "truck" | "auto";

export interface IPartnerBank {
  owner: mongoose.Types.ObjectId;
  accountHolder:string,
  accountNumber:string,
  ifsc:string,
  upi?:string,
  status: "not_added" | "added" | "verified";
  createdAt?: Date;
  updatedAt?: Date;
}

const partnerBankSchema = new Schema<IPartnerBank>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountHolder:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true,
        unique:true
    },
    ifsc:{
        type:String,
        required:true,
        uppercase:true
    },
    upi?:String,
    status: {
      type: String,
      enum: ["not_added", "added", "verified"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const PartnerBank: Model<IPartnerBank> =
  mongoose.models.Vehicle || mongoose.model<IPartnerBank>("PartnerBank", partnerBankSchema);

export default PartnerBank;