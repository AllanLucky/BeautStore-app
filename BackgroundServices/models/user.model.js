import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  status: {
    type: String,
    default: 0, // 0: inactive, 1: active
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;