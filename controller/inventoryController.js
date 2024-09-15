const Inventory = require("../models/inventory");

const api_add_product = async (req, res) => {
  try {
    const {
      productName,
      description,
      quantity,
      price,
      batchNumber,
      manufactureDate,
      expiryDate,
      supplierId,
      retailerId,
    } = req.body;

    // Generate a unique productId
    const productId = `PROD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Find the inventory for the retailer
    let inventory = await Inventory.findOne({ retailerId });

    if (!inventory) {
      // If no inventory exists for the retailer, create one
      inventory = new Inventory({ retailerId, products: [] });
    }

    // Add the new product to the inventory
    inventory.products.push({
      productId,
      productName,
      description,
      quantity,
      price,
      batchNumber,
      manufactureDate,
      expiryDate,
      supplierId,
      retailerId,
    });

    // Save the updated inventory
    await inventory.save();

    res.json({ msg: "Product added successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  api_add_product,
};
