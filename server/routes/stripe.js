const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({
          message: stripeErr,
        });
      } else {
        res.status(200).json({ message: "successful", result: stripeRes });
      }
    }
  );
});

module.exports = router;
