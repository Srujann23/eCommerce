import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js';

//COD
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

//stripe
const placeOrderStripe = async (req, res) => {

}

//Razorpay
const placeOrderRazorpay = async (req, res) => {

}

//all orders for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.fimd({});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//user orderdata for frontend
const userOrders = async (req, res) => {

    try {

        const { userId } = req.body;

        const orders = await orderModel.find({userId})
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//update order status
const updateStatus = async (req, res) => {

}
export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }