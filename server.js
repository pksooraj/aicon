const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  // Check if the request is for a specific HTML file
  if (req.path.endsWith('.html')) {
    // If the file exists, Express static middleware will handle it
    return res.sendFile(path.join(__dirname, req.path));
  }
  
  // For all other routes, serve index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`To view the website, open http://localhost:${PORT} in your browser`);
});