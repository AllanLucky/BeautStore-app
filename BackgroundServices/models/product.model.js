import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  whatinbox: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  wholeSalePrice: {
    type: Number,
  },
  wholesaleMinQty: {
    type: Number,
  },
  categories: {
    type: Array,
  },
  concerns: {
    type: Array,
  },
  brand: {
    type: String,
  },
  skinType: {
    type: Array,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
  },
  instock: {
    type: Boolean,
    default: true,
  },
  rating: [
    {
      star: { type: Number, required: true },        // 1–5 rating
      name: { type: String, required: true },        // reviewer name
      comment: { type: String },
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      createdAt: { type: Date, default: Date.now }
    }
  ],
}, { timestamps: true });

productSchema.index({"$**": 'text'});
const Product = mongoose.model("Product", productSchema);
export default Product;