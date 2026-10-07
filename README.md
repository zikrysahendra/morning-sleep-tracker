# Morning Sleep Tracker (MVP 1.0)

React + Vite. Jalankan:

    npm install
    npm run dev

## Struktur
- `public/assets/` -> TARUH GAMBARMU DI SINI (daftar nama file ada di `public/assets/README.md`)
- `src/data/options.js` -> semua pilihan (quality, mood, activity) + path gambar
- `src/utils/sleep.js` -> hitung durasi (aman lewat tengah malam)
- `src/components/MorningRoom/` -> MorningRoom (scene) + Alarm (area klik di atas jam alarm gambar)
- `src/components/MorningCheckIn/` -> SleepQuality, SleepDuration, MoodSelector, MorningActivity
- `src/components/SleepSummary.jsx`
- `src/App.jsx` -> semua state (alarmOff, sleepQuality, bedTime, wakeTime, mood, morningActivity)

Gambar yang belum ada otomatis diganti emoji/warna, jadi app tetap bisa dicoba.
