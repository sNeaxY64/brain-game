const play = document.getElementById('playbutton');
const sesEfekti = document.getElementById('sesEfekti');
const menuall = document.getElementById('menu'); // İçerik alanı
const setting = document.getElementById('settingbutton');
const start = document.getElementById('start');
const back1 = document.getElementById('back1');
const toplama = document.getElementById('toplama');
const cixma = document.getElementById('cixma');
const vurma = document.getElementById('vurma');
const  bolme = document.getElementById('bolme');
const topcixbolvur = document.getElementById('topcixbolvur');
const find = document.getElementById('find');
const Geometry = document.getElementById('Geometry');
const Triangle = document.getElementById('Triangle');
const kok = document.getElementById('kok');
const kesr = document.getElementById('kesr');

play.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal

    // İçeriği yavaşça kaybolacak şekilde ayarlama
    menuall.style.transition = "opacity 1s ease"; // Geçiş süresi
    menuall.style.opacity = "0"; // Opaklığı 0 yap

    // Bir saniye sonra içeriği gizleme (1 saniye geçiş süresi kadar)
    setTimeout(() => {
        menuall.style.display = "none"; // İçeriği gizle
    }, 1000);

    start.style.display = "block"; // Buton hemen görünür olsun
    start.style.opacity = "0"; // Başlangıçta şeffaf olsun
    start.style.transition = "opacity 2s ease"; // Opaklık geçişi 2 saniye olacak şekilde
    setTimeout(() => {
        start.style.opacity = "1"; // Opaklığı 1 yaparak görünsün
    }, 50); // Opaklık geçişinin hemen başlaması için küçük bir gecikme

});

back1.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal

    start.style.transition = "opacity 1s ease"; // Geçiş süresi
    start.style.opacity = "0"
    setTimeout(() => {
        start.style.display = "none"; // İçeriği gizle
    }, 1000);
    menuall.style.transition = "opacity 1s ease"; // Geçiş süresi
    menuall.style.display = "flex"
    menuall.style.opacity = "0"; // Opaklığı 0 yap
    setTimeout(() => {
        menuall.style.opacity = "1"; // İçeriği gizle
    }, 50);

});


setting.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
toplama.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
cixma.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
vurma.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
bolme.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
topcixbolvur.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
find.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
kok.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
Geometry.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
Triangle.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});
kesr.addEventListener('click', () => {
    sesEfekti.currentTime = 0; // Sesin en baştan başlaması için
    sesEfekti.play(); // Ses dosyasını çal
});

document.addEventListener("DOMContentLoaded", function() {
    // Sayfa yüklendiğinde çizgi ilk başta görünecek
    document.getElementById("musicIcon").classList.add("line-through");

    // Müzik butonuna tıklandığında çalışacak fonksiyon
    document.getElementById("musicButton").onclick = toggleMusic;

    function toggleMusic() {
        var music = document.getElementById("musicmenu");
        var musicIcon = document.getElementById("musicIcon");

        if (music) { // Müzik öğesi varsa kontrol et
            if (music.paused) {
                music.play(); // Müzik çalmıyorsa başlat
                musicIcon.classList.remove("line-through"); // Çizgiyi kaldır
            } else {
                music.pause(); // Müzik çalıyorsa durdur
                musicIcon.classList.add("line-through"); // Çizgiyi ekle
            }
        } else {
            console.error("Müzik öğesi bulunamadı!");
        }
    }
});

// Müzik sona erdiğinde tekrar başlat
const music = document.getElementById("musicmenu");
if (music) {
    music.addEventListener("ended", function() {
        music.currentTime = 0; // Müzik en başa döner
        music.play(); // Müzik yeniden başlar
    });
}
