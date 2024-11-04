const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const cors = require('cors');
const PORT = 3000;
console.log('Current working directory:', __dirname);

//use route
app.use(express.json());
app.use(cors());
app.get('/download', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    try {
        const info = await ytdl.getInfo(videoUrl);
        //const formats = info.formats;
        let mp4 = info.formats;
        const hd = ytdl.chooseFormat(info.formats, { quality: '136' });
        const mp4Format = mp4.find(format => format.container === 'mp4');
        
        res.json({
            success: true,
            message: 'Video format successfully retrieved!',
            all: mp4,
            VidioAudio: hd
        });
    } catch (error) {
        console.error('Error fetching video formats:', error);
        return res.status(500).json({ error: 'Failed to fetch video format' });
    }
});
app.get('/info', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'URL tidak valid' });
    }

    try {
        const info = await ytdl.getInfo(videoUrl);
        const title = info.videoDetails.title;
        const duration = info.videoDetails.lengthSeconds; // durasi dalam detik
        const thumbnailUrl = info.videoDetails.thumbnails[0].url; // Mengambil thumbnail terbesar
        const media = info.videoDetails.media;
        res.json({
            success: true,
            message: 'Success!',
            title: title,
            duration: duration,
            media: media,
            thumbnail: thumbnailUrl
        });
    } catch (error) {
        console.error('Error fetching info video:', error);
        return res.status(500).json({ error: 'Failed to take info video' });
    }
});
app.get('/thumbnail', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({
            success: false,
            message: 'URL not found!',
        });
    }

    try {
        const info = await ytdl.getInfo(url);
        const thumbnailUrl = info.videoDetails.thumbnails[0].url;

        return res.json({
            success: true,
            message: 'Thumbnail successfully retrieved!',
            thumbnail: thumbnailUrl,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch thumbnail!',
        });
    }
});
app.get('/', (req, res) => {
    res.status(200).send(`success`);
});
app.get('/ping', (req, res) => {
    res.status(200).send('Ping successful');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
