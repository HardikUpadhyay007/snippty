import mongoose from "mongoose";
async function connect(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("db is connected");
    } catch (err) {
        console.log(err);
    }
}
export default connect;
