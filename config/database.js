import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URL)
        console.log('DB success')
    } catch (e) {
        console.log(e.message)
    }
}

export {connectDB}