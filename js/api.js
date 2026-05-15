const buton = document.getElementById("karakterleriGetirBtn");
const karakterListesi = document.getElementById("karakterListesi");

buton.addEventListener("click", karakterleriGetir);

function karakterleriGetir() {
  karakterListesi.innerHTML = "<p class='text-center'>Karakterler yükleniyor...</p>";

  fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => {
      karakterListesi.innerHTML = "";

      // İlk 12 karakteri gösteriyoruz.
      data.slice(0, 12).forEach(karakter => {
        const kart = `
          <div class="col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="${karakter.imageUrl}" class="card-img-top character-img" alt="${karakter.fullName}">
              <div class="card-body">
                <h5 class="card-title">${karakter.fullName}</h5>
                <p class="card-text"><strong>Unvan:</strong> ${karakter.title || "Bilinmiyor"}</p>
                <p class="card-text"><strong>Aile:</strong> ${karakter.family || "Bilinmiyor"}</p>
              </div>
            </div>
          </div>
        `;
        karakterListesi.innerHTML += kart;
      });
    })
    .catch(error => {
      karakterListesi.innerHTML = "<div class='alert alert-danger'>API verileri alınırken hata oluştu.</div>";
      console.error("API Hatası:", error);
    });
}
