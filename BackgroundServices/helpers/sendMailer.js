import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create transporter function
function createTransporter(config) {
  return nodemailer.createTransport(config);
}

// Gmail configuration
const configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // must be false for STARTTLS on port 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // or App Password if 2FA is enabled
  },
};

const sendMail = async (messageOptions) => {
  try {
    const transporter = createTransporter(configurations);
    await transporter.verify(); // verify connection
    const info = await transporter.sendMail(messageOptions); // send mail
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Email sending error:", error);
    throw error;
  }
};

export default sendMail;
