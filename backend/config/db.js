import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Aliou_hynde:aliouhyndemongodb@nodeexpressproject.zxcmfom.mongodb.net/Book_Seller",
    )
    .then(() => console.log("DB CONNECTED"));
};
