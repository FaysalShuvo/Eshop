const Product = require("../modals/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// Create New Product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json({
      message: "successful",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// update  product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "successful",
      result: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete user
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product has been deleted..." });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get product by id
router.get("/find/:id", async (req, res) => {
  try {
    const product = await User.findById(req.params.id);

    res.status(200).json({
      message: "successful",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get all product
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json({ message: "successful", data: products });
  } catch (err) {
    res.status(500).json({ message: "Error", err });
  }
});

module.exports = router;
