// import express from "express";

// import axios from "axios";
// import cors from "cors";

// const app = express();
// const PORT = 3001; // Choose any port you prefer

// app.use(cors());

// app.get('/downloadPdf', async (req, res) => {
//   const pdfUrl = 'https://raw.githubusercontent.com/Ashutosh1406/c-backend/ad6ecfdb0540d0847aa939e1b0591de4c1680f8e/Affidavit-1712295411.pdf'; 
//   try {
//     const response = await axios.get(pdfUrl, {
//       responseType: 'arraybuffer' // Use arraybuffer responseType
//     });
//     const pdfData = response.data;
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
//     res.send(pdfData);
//   } catch (error) {
//     console.error('Error downloading PDF:', error);
//     res.status(500).send('Error downloading PDF');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// const express = require('express');
// const app = express();
// const path = require('path');

// Serve static files (including the PDF)

import express from "express";
import path from "path"
import {fileURLToPath} from 'url'
// import axios from 'axios'
import cors from "cors"


const app = express();

const PORT = 3001;

app.use(cors())
app.use(express.static('public'));

// Define a route to handle requests for the PDF file
app.get('/downloadPdf', (req, res) => {
  console.log("hello reached")
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '..', '..', 'public', 'images', 'Serve', 'Affidavit-1712295411.pdf');
  res.download(filePath);
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


