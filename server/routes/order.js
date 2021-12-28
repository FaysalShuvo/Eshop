const Order = require("../modals/Order");
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require("./verifyToken");

const router = require("express").Router();

// Create order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({
      message: "successful",
      data: savedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// update order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "successful",
      result: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete cart
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product has been deleted..." });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get users order
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId,
    });

    res.status(200).json({
      message: "successful",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      message: "successful",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
