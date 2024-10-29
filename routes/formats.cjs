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

module.exports = router;
