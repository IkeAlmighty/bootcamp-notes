const express = require('express');
const app = express();
const path = require('path');
const port = parseInt(process.env.PORT) || 3000;

app.use('/posts', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => console.log(`express server running on port ${port}`))

module.exports = app;