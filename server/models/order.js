const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
  product: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "Product" },
      count: Number,
      color: String,
    },
  ],
  status: {
    type: String,
    default: "Processing",
    enum: ["Cancelled", "Processing","Success"], // hủy , đang xử lý , thành công
  },
  paymentIntent: {
    
  },
  orderBy: {
    type: mongoose.Types.ObjectId,
    ref:"Use",
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("User", orderSchema);
