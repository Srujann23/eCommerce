import exoress from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController'

const cartRouter = express.Router()

cartRouter.post('/get',getUserCart)
cartRouter.post('/add',getUserCart)
cartRouter.post('/update',getUserCart)

export default cartRouter