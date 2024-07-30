import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    ProductDes: {
        type: String,
        required: true,
    },
    ProductPrice: {
        type: String,
        required: true,
    },
    ProductRate: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

export default Product;
