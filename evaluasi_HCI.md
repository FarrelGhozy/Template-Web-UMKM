# 📊 LAPORAN EVALUASI HCI - AFMO.id

**Mata Kuliah:** Interaksi Manusia dan Komputer (IMK)
**Dosen Pengampu:** [Nama Dosen Anda]
**Tanggal Evaluasi:** Desember 2025

**Anggota Kelompok:**
1. **Alan Sutrisno Putra** (NIM: 452024611030)
2. **Farrel Ghozy** (NIM: 452024611053)
3. **Adhiss Sukmo** (NIM: 452024611004)

---

## 📋 EXECUTIVE SUMMARY

Website **AFMO.id** telah dievaluasi menggunakan metode *Heuristic Evaluation* berdasarkan **10 Usability Heuristics Nielsen**. Hasil evaluasi menunjukkan bahwa website ini memiliki tingkat *usability* yang baik dengan skor rata-rata **4.3/5.0**. Website ini dirancang untuk profil UMKM Lifestyle dengan fokus pada kemudahan navigasi dan konversi penjualan melalui WhatsApp.

---

## 🎯 BAGIAN 1: HEURISTIC EVALUATION

### Metodologi
**Evaluator:** 3 orang anggota tim
**Metode:** Nielsen's 10 Usability Heuristics
**Severity Rating:** 0 (Bukan Masalah) s/d 4 (Masalah Kritis)

---

### Heuristic #1: Visibility of System Status

**Definisi:** Sistem harus selalu memberitahu user tentang statusnya.

**Temuan:**
✅ **Strengths:**
- Navigasi menu memiliki indikator `.active` (warna Terracotta) untuk menunjukkan halaman yang sedang dibuka.
- Validasi formulir kontak memberikan umpan balik instan (border merah/hijau) saat pengguna mengetik.
- Pesan sukses ("Pesan Anda berhasil dikirim!") muncul setelah formulir disubmit.

⚠️ **Weaknesses:**
- Tidak ada indikator *loading* (skeleton loader) khusus saat gambar produk sedang dimuat di koneksi lambat (hanya mengandalkan browser).

**Severity:** 2 (Minor)
**Score:** 4/5

---

### Heuristic #2: Match Between System and Real World

**Definisi:** Sistem menggunakan bahasa dan konsep yang familiar bagi user.

**Temuan:**
✅ **Strengths:**
- Menggunakan Bahasa Indonesia yang natural dan tidak kaku.
- Tombol WhatsApp menggunakan ikon dan warna hijau yang sudah menjadi *mental model* pengguna Indonesia untuk komunikasi.
- Kategori produk (Tas, Dekorasi, Aksesoris) menggunakan istilah umum yang mudah dipahami.
- Penggunaan ikon "Keranjang" (*Basket*) untuk merepresentasikan toko.

**Severity:** 0 (Bukan Masalah)
**Score:** 5/5

---

### Heuristic #3: User Control and Freedom

**Definisi:** Kemudahan bagi user untuk membatalkan aksi atau keluar dari situasi yang tidak diinginkan.

**Temuan:**
✅ **Strengths:**
- Tombol navigasi *Breadcrumbs* memudahkan pengguna kembali ke halaman induk tanpa menekan tombol *Back* browser.
- Filter kategori produk bisa dikembalikan ke "Semua Kategori" dengan mudah.
- Menu Hamburger di mobile bisa dibuka dan ditutup dengan cepat.

⚠️ **Weaknesses:**
- Tidak ada tombol "Reset" eksplisit pada formulir kontak (harus hapus manual atau refresh).

**Severity:** 2 (Minor)
**Score:** 4/5

---

### Heuristic #4: Consistency and Standards

**Definisi:** User tidak perlu bingung dengan standar yang berbeda-beda.

**Temuan:**
✅ **Strengths:**
- **Konsistensi Visual:** Menggunakan palet warna 60-30-10 (Beige, Terracotta, Brown) secara konsisten di seluruh halaman.
- **Konsistensi Layout:** Header dan Footer identik di ke-4 halaman (`index`, `products`, `about`, `contact`).
- **Standar Bootstrap:** Mengikuti pola *grid system* dan komponen Bootstrap 5 yang sudah standar industri.

**Severity:** 0
**Score:** 5/5

---

### Heuristic #5: Error Prevention

**Definisi:** Mencegah masalah terjadi daripada hanya memberikan pesan error.

**Temuan:**
✅ **Strengths:**
- *Input Type* HTML5 digunakan dengan tepat (`type="email"`, `type="tel"`) untuk memunculkan keyboard yang sesuai di HP.
- Dropdown menu digunakan untuk pemilihan topik pesan, mencegah kesalahan ketik (*typo*).
- Tombol kirim dinonaktifkan (*disabled*) sementara saat proses pengiriman berlangsung untuk mencegah *double-submit*.

**Severity:** 1 (Cosmetic)
**Score:** 4.5/5

---

### Heuristic #6: Recognition Rather Than Recall

**Definisi:** Meminimalkan beban memori user dengan membuat objek dan opsi terlihat jelas.

**Temuan:**
✅ **Strengths:**
- Ikon disertakan pada tombol dan menu (misal: ikon WA di tombol pesan) untuk mempercepat pengenalan fungsi.
- Label input pada formulir menggunakan gaya *Floating Labels*, sehingga label tetap terlihat meskipun kolom sudah diisi.
- Informasi kontak penting (Alamat, No HP) selalu tersedia di Footer setiap halaman.

**Severity:** 0
**Score:** 5/5

---

### Heuristic #7: Flexibility and Efficiency of Use

**Definisi:** Sistem bisa digunakan dengan efisien oleh pengguna awam maupun mahir.

**Temuan:**
✅ **Strengths:**
- Fitur **Filter Kategori** di halaman Produk memungkinkan pengguna langsung menemukan barang yang dicari tanpa *scroll* panjang.
- Tombol "Pesan Sekarang" langsung membuka aplikasi WhatsApp dengan *pre-filled message*, mempercepat proses transaksi secara signifikan.

⚠️ **Weaknesses:**
- Belum ada fitur pencarian (*Search Bar*) untuk mencari nama produk spesifik.

**Severity:** 2 (Minor)
**Score:** 3.5/5

---

### Heuristic #8: Aesthetic and Minimalist Design

**Definisi:** Antarmuka tidak boleh mengandung informasi yang tidak relevan.

**Temuan:**
✅ **Strengths:**
- Desain bersih (*Clean Design*) dengan pemanfaatan *White Space* (`py-5`, `mb-5`) yang baik.
- Tipografi menggunakan font *Playfair Display* untuk judul yang memberikan kesan elegan namun tetap minimalis.
- Informasi pada kartu produk dibatasi hanya pada hal esensial: Gambar, Nama, Kategori, Harga, dan Tombol Aksi.

**Severity:** 0
**Score:** 5/5

---

### Heuristic #9: Help Users Recognize, Diagnose, and Recover from Errors

**Definisi:** Pesan error harus jelas dan menawarkan solusi.

**Temuan:**
✅ **Strengths:**
- Pesan validasi formulir menggunakan bahasa yang sopan dan jelas (contoh: "Mohon masukkan email yang valid").
- Kolom yang bermasalah diberi *highlight* border merah agar mudah ditemukan.

**Severity:** 1 (Cosmetic)
**Score:** 4.5/5

---

### Heuristic #10: Help and Documentation

**Definisi:** Tersedianya bantuan jika user mengalami kesulitan.

**Temuan:**
✅ **Strengths:**
- Halaman **Kontak** menyediakan bagian **FAQ (Pertanyaan Umum)** yang menggunakan *Accordion* untuk menjawab pertanyaan seputar pemesanan dan pengiriman.
- Terdapat berbagai saluran bantuan: WhatsApp, Email, dan Alamat fisik yang disertai peta (Google Maps embed).

**Severity:** 1 (Cosmetic)
**Score:** 4/5

---

## 📊 RANGKUMAN SKOR HEURISTIC

| # | Prinsip Heuristik | Skor | Keterangan |
|---|-------------------|-------|------------|
| 1 | Visibility of System Status | 4.0 | Baik |
| 2 | Match System & Real World | 5.0 | Sangat Baik |
| 3 | User Control & Freedom | 4.0 | Baik |
| 4 | Consistency & Standards | 5.0 | Sangat Baik |
| 5 | Error Prevention | 4.5 | Sangat Baik |
| 6 | Recognition vs Recall | 5.0 | Sangat Baik |
| 7 | Flexibility & Efficiency | 3.5 | Cukup |
| 8 | Aesthetic & Minimalist | 5.0 | Sangat Baik |
| 9 | Error Recovery | 4.5 | Sangat Baik |
| 10 | Help & Documentation | 4.0 | Baik |
| **RATA-RATA** | **TOTAL SCORE** | **4.45/5** | **Excellent** |

---

## 🧪 BAGIAN 2: SKENARIO PENGUJIAN (USABILITY TESTING)

### Skenario 1: Pencarian Produk Dekorasi
**Tugas:** "Temukan produk Lampu Hias untuk kamar tidur dan tanyakan ketersediaannya."
**Hasil:**
- Pengguna berhasil menggunakan filter "Dekorasi Rumah".
- Pengguna menemukan "Lampu Hias Bambu" dalam waktu < 10 detik.
- Tombol WhatsApp berfungsi dan langsung membuka chat dengan penjual.

### Skenario 2: Mengisi Buku Tamu/Kontak
**Tugas:** "Kirim pesan penawaran kerja sama melalui website."
**Hasil:**
- Pengguna dapat memilih topik "Kerja Sama" pada dropdown.
- Validasi email berfungsi saat pengguna mencoba memasukkan format yang salah.
- Pesan sukses muncul setelah tombol kirim ditekan.

---

## 💡 KESIMPULAN & REKOMENDASI

Secara keseluruhan, website **AFMO.id** telah memenuhi standar usabilitas yang baik untuk sebuah website profil UMKM. Antarmuka dirancang sederhana namun fungsional, memprioritaskan kemudahan akses informasi produk dan kontak.

**Rekomendasi Pengembangan Selanjutnya:**
1.  **Search Bar:** Menambahkan fitur pencarian teks untuk katalog produk yang lebih besar.
2.  **Dark Mode:** Menyediakan opsi tampilan gelap untuk kenyamanan mata di malam hari.
3.  **Loading Skeleton:** Menambahkan animasi *skeleton* saat memuat gambar produk untuk meningkatkan persepsi performa.

---
<div align="center">
**Laporan ini disusun sebagai bagian dari Tugas Akhir Semester IMK.**
</div>