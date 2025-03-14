const express = require('express');
const Order = require('./order_model');

const router = express.Router();

// Create a new order
router.post('/order', async (req, res) => {
    try {
        const { customerName, email, phone, address, items, totalAmount } = req.body;
        
        const newOrder = new Order({
            customerName,
            email,
            phone,
            address,
            items,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
    } catch (error) {
        res.status(500).json({ error: 'Failed to place order' });
    }
});

// Get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
});

module.exports = router;
