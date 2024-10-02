import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//midddelwares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//api eps
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send('Hello ')
})

app.listen(port, ()=>console.log("Server Running on PORT: "+port))