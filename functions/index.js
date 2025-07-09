const functions = require("firebase-functions"); // v1 import
const axios = require("axios");
require("dotenv").config();

// API calling function — secure, with hidden API key
exports.getHealthData = functions.https.onRequest(async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/data", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({
      success: false,
      error: "API call failed",
    });
  }
});