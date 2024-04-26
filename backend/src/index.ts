import cors from "cors"
import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

const app = express();
app.use(cors());
app.use(express.json())
// ko hoạt động
app.use(
    cors(
        {
            credentials: true,
            origin: ['http://localhost:5173/'],
        }
    )
)
dotenv.config()
const MONGODB_URL = process.env.MONGODB_URI || "mongodb://localhost/tsamazonadb"
mongoose.set('strictQuery', true)
mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log('connected to mongodb')
    })
    .catch(() => {
        console.log('error mongodb')
    })
//hỗ trợ cho phương post để lấy body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 4000;
//đã từng thêm cors() ????chả hiểu có thể do TANSTACK
app.use("/api/products", productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use("/api/seed", seedRouter)//dê tạo data test
app.use("/api/keys", keyRouter)
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});