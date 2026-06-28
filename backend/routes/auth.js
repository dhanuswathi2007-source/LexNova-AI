const express = require("express");
const router = express.Router();

const Advocate = require("../models/Advocate");

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const Case = require("../models/Case");
const Order = require("../models/Order");
const Citation = require("../models/Citation");
const FIR = require("../models/FIR");

router.get("/register", (req, res) => {
  res.json({
    message: "Register Route Working",
  });
});

router.post("/register", async (req, res) => {
  try {
    console.log("📥 DATA RECEIVED:", req.body);

    const advocate = new Advocate(req.body);

    await advocate.save();

    console.log("✅ DATA SAVED TO MONGODB");

    res.json({
      success: true,
      message: "Advocate Registered Successfully",
    });
  } catch (error) {
    console.log("❌ REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
      error: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const advocate = await Advocate.findOne({ email });

    if (!advocate) {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }

    if (advocate.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    res.json({
      success: true,
      message: "Login Successful",
      advocate,
    });

  } catch (error) {
    console.log("❌ LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
});
router.get("/advocates", async (req, res) => {
  try {
    const advocates = await Advocate.find();

    res.json(advocates);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching advocates",
    });
  }
});
router.post("/ai-chat", async (req, res) => {
  try {

    const { question } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(question);

    const response = result.response.text();

    res.json({
      answer: response,
    });

  } catch (error) {

    console.log("❌ AI ERROR:", error);

    res.status(500).json({
      message: "AI Error",
    });

  }
});

router.post("/add-case", async (req, res) => {
  try {

    const newCase = new Case(req.body);

    await newCase.save();

    res.json({
      success: true,
      message: "Case Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error Adding Case",
    });

  }
});
router.get("/cases", async (req, res) => {
  try {

    const cases = await Case.find();

    res.json(cases);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Cases",
    });

  }
});

router.put("/update-case/:id", async (req, res) => {
  try {

    await Case.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Case Updated Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
    });

  }
});

router.delete("/delete-case/:id", async (req, res) => {
  try {

    await Case.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Case Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });

  }
});

router.post("/add-order", async (req, res) => {
  try {

    const newOrder = new Order(req.body);

    await newOrder.save();

    res.json({
      success: true,
      message: "Order Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error Adding Order",
    });

  }
});

router.get("/orders", async (req, res) => {
  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Orders",
    });

  }
});


router.get("/orders", async (req, res) => {
  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Orders",
    });

  }
});

router.put("/update-order/:id", async (req, res) => {
  try {

    await Order.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Order Updated Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
    });

  }
});

router.delete("/delete-order/:id", async (req, res) => {
  try {

    await Order.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Order Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });

  }
});


router.post("/add-citation", async (req, res) => {
  try {

    const newCitation = new Citation(req.body);

    await newCitation.save();

    res.json({
      success: true,
      message: "Citation Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error Adding Citation",
    });

  }
});

router.get("/citations", async (req, res) => {
  try {

    const citations = await Citation.find();

    res.json(citations);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Citations",
    });

  }
});

router.put("/update-citation/:id", async (req, res) => {
  try {

    await Citation.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Citation Updated Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
    });

  }
});

router.delete("/delete-citation/:id", async (req, res) => {
  try {

    await Citation.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Citation Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });

  }
});


router.post("/add-fir", async (req, res) => {

  try {

    const newFIR = new FIR(req.body);

    await newFIR.save();

    res.json({
      success: true,
      message: "FIR Added Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error Adding FIR",
    });

  }

});

router.get("/firs", async (req, res) => {

  try {

    const firs = await FIR.find();

    res.json(firs);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching FIR",
    });

  }

});

router.put("/update-fir/:id", async (req, res) => {

  try {

    await FIR.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "FIR Updated Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
    });

  }

});

router.delete("/delete-fir/:id", async (req, res) => {

  try {

    await FIR.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "FIR Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });

  }

});

module.exports = router;