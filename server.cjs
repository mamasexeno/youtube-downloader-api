const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const cors = require('cors');
const PORT = 3000;
console.log('Current working directory:', __dirname);

//use route
app.use(express.json());
app.use(cors());
app.get('/formats', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'URL tidak valid' });
    }

    try {
        const info = await ytdl.getInfo(videoUrl);
        const formats = info.formats;

        res.json({
            success: true,
            message: 'Format video berhasil diambil!',
            formats: formats
        });
    } catch (error) {
        console.error('Error fetching formats:', error);
        return res.status(500).json({ error: 'Gagal mengambil format video' });
    }
});
app.get('/download', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'URL tidak valid' });
    }

    try {
        const info = await ytdl.getInfo(videoUrl);
        const title = info.videoDetails.title;
        const duration = info.videoDetails.lengthSeconds; // durasi dalam detik
        const thumbnailUrl = info.videoDetails.thumbnails[0].url; // Mengambil thumbnail terbesar

        res.json({
            success: true,
            message: 'Kode berjalan dengan baik!',
            title: title,
            duration: duration,
            thumbnail: thumbnailUrl
        });
    } catch (error) {
        console.error('Error fetching video:', error);
        return res.status(500).json({ error: 'Gagal mengambil video' });
    }
});
app.get('/thumbnail', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({
            success: false,
            message: 'URL tidak ditemukan!',
        });
    }

    try {
        const info = await ytdl.getInfo(url);
        const thumbnailUrl = info.videoDetails.thumbnails[0].url;

        return res.json({
            success: true,
            message: 'Thumbnail berhasil diambil!',
            thumbnail: thumbnailUrl,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal mengambil thumbnail!',
        });
    }
});
app.get('/', (req, res) => {
    res.status(200).send(`sukses`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
