# Folder Asset Gambar

Nama file harus PERSIS seperti di bawah (format .png).
Selama file belum ada, aplikasi tetap jalan memakai emoji/warna pengganti.

background/
  bedroom-morning.png         Scene kamar redup (471x423). Sudah termasuk matahari, lampu, tanaman, jam alarm, dll.
  bedroom-morning-light.png   Scene yang SAMA persis tapi terang (ukuran & posisi identik)
icons/   (PNG transparan, mis. 32x32 atau 48x48)
  sleepy.png relaxed.png happy.png energetic.png
  coffee.png breakfast.png shower.png exercise.png study.png work.png

objects/
  alarm-ringing.png   Jam berdering (PNG transparan, ~60x55 px). Ditaruh MENUTUPI jam asli di scene
                      lalu bergetar. Setelah alarm dimatikan, gambar ini hilang & jam asli di scene terlihat.
                      Buat sedikit lebih besar dari jam asli agar jam asli tidak mengintip saat bergetar.

Dekorasi & objek lain TIDAK dipakai (sudah ada di scene).

Menyesuaikan area klik alarm: buka `src/styles.css`, ubah --alarm-left / --alarm-top / --alarm-w / --alarm-h
(persen dari gambar). 
