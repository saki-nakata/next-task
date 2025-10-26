import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
    console.log("MongoDB 接続成功");
  } catch (error) {
    console.error("DB接続に失敗しました:", error);
    throw error;
  }
};
