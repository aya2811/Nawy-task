import mongoose, { Document, Schema } from "mongoose";

const uniqueValidator = require('mongoose-unique-validator');

export interface Apartment extends Document {
  _id: string;
  number: number;
  floor: number;
  block: number;
  street: string;
  district: string;
  city:string;
}

const apartmentSchema = new Schema<Apartment>({
  number: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  block: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

apartmentSchema.plugin(uniqueValidator);
const Apartment = mongoose.model("Apartment", apartmentSchema);

export default Apartment;