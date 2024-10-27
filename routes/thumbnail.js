const express = require('express');
const ytdl = require('ytdl-core');
const router = express.Router();

router.get('/', async (req, res) => {
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

module.exports = router;
