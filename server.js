const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// API endpoint for handling button clicks
app.post('/button-click', (req, res) => {
    console.log('Button was clicked! Performing backend logic...');

    // Simulated backend processing
    const responseMessage = { message: 'Button click processed successfully!' };

    res.json(responseMessage);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
