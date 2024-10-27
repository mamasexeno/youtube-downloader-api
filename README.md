# ValCon YouTube Downloader API

ValCon YouTube Downloader API adalah API berbasis Node.js yang memungkinkan pengguna untuk mengunduh konten dari YouTube, seperti video, audio, thumbnail, subtitle, dan playlist. API ini menawarkan antarmuka yang sederhana untuk mengakses berbagai jenis media dari YouTube dengan cepat.

## Fitur
- **Unduh Video**: Mendukung pengunduhan video dalam berbagai resolusi.
- **Unduh Audio**: Mengunduh audio saja dari video dengan format yang kompatibel.
- **Thumbnail**: Mendapatkan thumbnail utama dari video.
- **Subtitle**: Mendukung pengunduhan subtitle jika tersedia.

## Persyaratan
- **Node.js**: Versi 14 atau lebih baru.
- **npm**: Versi 6 atau lebih baru.

## Instalasi

1. **Clone repository ini** ke direktori lokal Anda.
   ```bash
   git clone https://github.com/Rafa-Arfiansyah/youtube-downloader-api.git
   cd youtube-downloader-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan server**:
   ```bash
   node server.js
   ```
   Server akan berjalan di `http://localhost:3000`.

## Endpoint API

### 1. Mendapatkan Thumbnail
   - **URL**: `/thumbnail`
   - **Metode**: `GET`
   - **Parameter Query**: 
     - `url` - URL video YouTube.
   - **Contoh**:
     ```http
     GET http://localhost:3000/thumbnail?url=https://youtu.be/video_id
     ```

### 2. Mendownload Video
   - **URL**: `/video`
   - **Metode**: `GET`
   - **Parameter Query**: 
     - `url` - URL video YouTube.
   - **Contoh**:
     ```http
     GET http://localhost:3000/video?url=https://youtu.be/video_id
     ```

### 3. Mendownload Audio
   - **URL**: `/audio`
   - **Metode**: `GET`
   - **Parameter Query**:
     - `url` - URL video YouTube.
   - **Contoh**:
     ```http
     GET http://localhost:3000/audio?url=https://youtu.be/video_id
     ```


## Lisensi
Proyek ini berlisensi di bawah [MIT License](LICENSE).
