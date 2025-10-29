document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen-elemen yang dibutuhkan dari DOM
    const btnTampilkanVisi = document.getElementById('btn-tampilkan-visi');
    const detailVisiSection = document.getElementById('detail-visi');
    
    // 2. Tambahkan event listener pada tombol
    btnTampilkanVisi.addEventListener('click', function() {
        
        // Cek apakah bagian detail sedang tersembunyi
        const isHidden = detailVisiSection.classList.contains('detail-tersembunyi');
        
        if (isHidden) {
            // Jika tersembunyi, tampilkan dan ubah teks tombol
            detailVisiSection.classList.remove('detail-tersembunyi');
            btnTampilkanVisi.textContent = 'Sembunyikan Visi & Misi';
        } else {
            // Jika sudah tampil, sembunyikan dan kembalikan teks tombol
            detailVisiSection.classList.add('detail-tersembunyi');
            btnTampilkanVisi.textContent = 'Tampilkan Visi & Misi';
        }

        // Contoh modifikasi konten: Mengubah teks visi
        const visiTeks = document.getElementById('visi-teks');
        if (isHidden) {
             visiTeks.innerHTML = '✨ **Menjadi pemimpin pasar dalam solusi teknologi digital di Asia Tenggara (Diperbarui!).**';
        } else {
             visiTeks.innerHTML = 'Menjadi pemimpin pasar dalam solusi teknologi digital di Asia Tenggara.';
        }
    });

    // 3. (Opsional) Log untuk memastikan script terhubung
    console.log("Script.js berhasil dimuat dan terhubung.");
});
