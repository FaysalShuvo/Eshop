const Cart = require("../modals/Cart");
const { verifyTokenAndAdmin, verifyTokenAndAuth } = require("./verifyToken");

const router = require("express").Router();

// Create Cart
router.post("/", async (req, res) => {
  const newCart = new Product(req.body);

  try {
    const savedProduct = await newCart.save();
    res.status(200).json({
      message: "successful",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// update  cart
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "successful",
      result: updatedCart,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete cart
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product has been deleted..." });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get user cart by id
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId,
    });

    res.status(200).json({
      message: "successful",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({
        message: "successful",
        data: carts,
      });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
