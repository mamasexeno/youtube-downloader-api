const express = require('express');
const app = express();
const PORT = 3000;
console.log('Current working directory:', __dirname);

const formatsRouter = require('./routes/formats');
const downloadRouter = require('./routes/download');
const thumbnailRouter = require('./routes/thumbnail');

//use route
app.use(express.json());
app.use('/formats', formatsRouter);
app.use('/download', downloadRouter);
app.use('/thumbnail', thumbnailRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
