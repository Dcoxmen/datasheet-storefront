const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const axios = require ('axios');
const pdfTemplate = require('./templates/index');
 
const app = express();

const PORT = process.env.PORT || 5002;

// Allow cross-origin
app.use(cors());



// Body parser middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// POST request to fetch data for PDF generation
app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('datasheet.pdf', (err) => {
    if(err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

// POST request to fetch data for PDF generation
app.post('/download-pdf', (req, res) => {
  const config = {
    "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
    "border": {
      "top": "10mm",            // default is 0, units: mm, cm, in, px
      "right": "15mm",
      "bottom": "10mm",
      "left": "15mm"
    },
    "header": {
      "height": "0mm",
    },
    "footer": {
      "height": "18mm",
    }
  };

  pdf.create(pdfTemplate(req.body), config).toFile('datasheet.pdf', (err) => {
    if(err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});



// GET request to send the generated PDF to client
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/datasheet.pdf`)
});

// GraphQL Schema


// Allow public folder
app.use( express.static('./public'));

// Serve index file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));