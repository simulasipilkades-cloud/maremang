let kandidatTerpilih = null;

// 1. Memperbaiki event.currentTarget dengan mengirim parameter `event` dari HTML
function pilihKandidat(event, nomor, nama) {
    const cards = document.querySelectorAll('.kandidat-card');
    cards.forEach(card => card.classList.remove('selected'));

    event.currentTarget.classList.add('selected');

    // Simpan data kandidat yang dipilih
    kandidatTerpilih = { nomor: nomor, nama: nama };

    document.getElementById('btn-pilih-utama').disabled = false;
}

// Fungsi Konfirmasi
function tampilKonfirmasi() {
    if (!kandidatTerpilih) return;

    const fotoKandidat = kandidatTerpilih.nomor === 4 ? 'image/calon.jpeg' : 'image/02.png';
    const fotoHTML = `<img src="${fotoKandidat}" alt="Foto ${kandidatTerpilih.nama}" style="width: 150px; height: 180px; border-radius: 10px; border: 3px solid #e74c3c; margin-bottom: 15px; object-fit: cover; object-position: top;">`;

    document.getElementById('konfirmasi-foto-container').innerHTML = fotoHTML;
    document.getElementById('nama-konfirmasi').innerText = kandidatTerpilih.nama;
    document.getElementById('nomor-konfirmasi').innerText = "Calon Nomor Urut " + kandidatTerpilih.nomor;

    gantiLayar('screen-konfirmasi');
}

function kembaliPilih() {
    gantiLayar('screen-kandidat');
}

function prosesPilih() {
    gantiLayar('screen-sukses');
}

function resetAplikasi() {
    kandidatTerpilih = null;
    document.getElementById('btn-pilih-utama').disabled = true;
    
    const cards = document.querySelectorAll('.kandidat-card');
    cards.forEach(card => card.classList.remove('selected'));

    gantiLayar('screen-kandidat');
}

function gantiLayar(idLayar) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // 2. Memastikan elemen layar sukses menggunakan flex karena pengaturannya beda sendiri di CSS
    const targetScreen = document.getElementById(idLayar);
    targetScreen.classList.add('active');
}