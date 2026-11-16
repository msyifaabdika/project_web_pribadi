// Interaksi kecil: tombol salin identitas di halaman kontak
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("copy-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var teks = "Muhammad Syifa Abdika_108052530009";
    var msg = document.getElementById("copy-msg");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(teks).then(function () { msg.textContent = "Tersalin: " + teks; });
    } else {
      msg.textContent = teks;
    }
  });
});
