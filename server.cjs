const express = require('express');
const app = express();
const PORT = 3000;

const formatsRouter = require('./src/routes/formats');
const downloadRouter = require('./src/routes/download');
const thumbnailRouter = require('./src/routes/thumbnail');

//use route
app.use(express.json());
app.use('/formats', formatsRouter);
app.use('/download', downloadRouter);
app.use('/thumbnail', thumbnailRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
