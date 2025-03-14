const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// Simulated fault data (individual faults)
const faultData = [
    { id: 1, track: "A", issue: "Fault detected", image: "pictures/fault1.jpg" },
    { id: 2, track: "B", issue: "Crack detected", image: "pictures/fault2.jpg" },
    { id: 3, track: "C", issue: "Misalignment", image: "pictures/fault3.jpg" },
];

// Simulated section data (aggregated faults per section)
const sectionData = [
    { id: 1, track: "A", faults: 6 },
    { id: 2, track: "B", faults: 3 },
    { id: 3, track: "C", faults: 2 },
];

// Endpoint to get fault data
app.get("/faults", (req, res) => {
    res.json(faultData);
});

// Endpoint to get section fault summary
app.get("/sections", (req, res) => {
    res.json(sectionData);
});

app.get("/notifications", (req, res) => {
    res.json({
        count: faultData.length,// Total number of faults
        faults: faultData, // Fault details
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});