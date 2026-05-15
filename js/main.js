// Login formu için native JavaScript kontrolü
function loginKontrol() {
  const kullaniciAdi = document.getElementById("kullaniciAdi").value.trim();
  const sifre = document.getElementById("sifre").value.trim();
  const hataDiv = document.getElementById("loginHata");

  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let hatalar = [];

  if (kullaniciAdi === "") {
    hatalar.push("Kullanıcı adı boş bırakılamaz.");
  } else if (!mailRegex.test(kullaniciAdi)) {
    hatalar.push("Kullanıcı adı e-posta formatında olmalıdır.");
  }

  if (sifre === "") {
    hatalar.push("Şifre boş bırakılamaz.");
  }

  if (hatalar.length > 0) {
    hataDiv.innerHTML = hatalar.join("<br>");
    hataDiv.classList.remove("d-none");
    return false;
  }

  hataDiv.classList.add("d-none");
  return true;
}

// PHP tarafından hatalı girişte login.html?hata=1 adresine yönlendirme yapılır.
document.addEventListener("DOMContentLoaded", function () {
  const hataDiv = document.getElementById("loginHata");
  const urlParams = new URLSearchParams(window.location.search);

  if (hataDiv && urlParams.get("hata") === "1") {
    hataDiv.innerHTML = "Kullanıcı adı veya şifre hatalı.";
    hataDiv.classList.remove("d-none");
  }
});


// Şehrim sayfasındaki sliderı otomatik başlatır.
document.addEventListener("DOMContentLoaded", function () {
  const izmirSlider = document.getElementById("izmirSlider");

  if (izmirSlider && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(izmirSlider, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true
    });
  }
});
