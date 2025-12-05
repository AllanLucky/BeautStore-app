import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  product: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    type: Number,
    default: 0, // 0: pending, 1: shipped, 2: delivered
  }

}, { timestamps: true });




const Order = mongoose.model("Order", orderSchema);
export default Order;