const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const sheetId = '1w9As71oc85CyQo0uYgZrBI8c3Ru7bEnfP1cBHwe6LkA'; // ضع هنا ID الخاص بـ Google Sheet
const apiKey = 'AIzaSyDER6yz4xWgDDjVgcQQpXl3TEcncrQO4mk'; // ضع هنا مفتاح API الخاص بك

app.get('/data', async (req, res) => {
    try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`);
        const data = response.data.values; // الحصول على البيانات
        res.json(data);
    } catch (error) {
        res.status(500).send('Error retrieving data from Google Sheets');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
