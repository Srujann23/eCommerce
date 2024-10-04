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

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// CORS Configuration
const allowedOrigins = ['https://boldbuy.vercel.app']; // Allow only production origin
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
}));

// Connect to MongoDB and Cloudinary
connectDB()
  .then(() => {
    console.log("Database connected");
    connectCloudinary();

    // API Endpoints
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/order', orderRouter);

    // Root Endpoint
    app.get('/', (req, res) => {
      res.send('Hello');
    });

    // Start the Server after DB Connection
    app.listen(port, () => console.log(`Server Running on PORT: ${port}`));
  })
  .catch(err => {
    console.error("Database connection error: ", err);
    process.exit(1); // Exit the process if DB connection fails
  });
