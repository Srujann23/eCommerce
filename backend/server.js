import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

dotenv.config();
//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//midddelwares
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://boldbuy.vercel.app,http://localhost:3000,http://localhost:5173').split(',');

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(morgan('dev'))

// Enable pre-flight across-the-board
app.options('*', cors(corsOptions));


//api eps
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('Hello from backend server')
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})
app.listen(port, ()=>console.log("Server Running on PORT: "+port))

