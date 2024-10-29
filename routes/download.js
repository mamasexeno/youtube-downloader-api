const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');

router.get('/', async (req, res) => {
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

module.exports = router;
