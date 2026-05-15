// Native JavaScript ile form kontrolü
function jsKontrol() {
  const adSoyad = document.getElementById("adSoyad").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const konu = document.getElementById("konu").value;
  const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
  const ilgiAlanlari = document.querySelectorAll('input[name="ilgiAlanlari[]"]:checked');
  const mesaj = document.getElementById("mesaj").value.trim();
  const hataDiv = document.getElementById("hataMesajlari");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonRegex = /^[0-9]+$/;

  let hatalar = [];

  if (adSoyad === "") hatalar.push("Ad soyad boş bırakılamaz.");
  if (email === "") hatalar.push("E-posta boş bırakılamaz.");
  else if (!emailRegex.test(email)) hatalar.push("E-posta formatı hatalı.");
  if (telefon === "") hatalar.push("Telefon boş bırakılamaz.");
  else if (!telefonRegex.test(telefon)) hatalar.push("Telefon sadece rakamlardan oluşmalıdır.");
  if (konu === "") hatalar.push("Konu seçilmelidir.");
  if (!cinsiyet) hatalar.push("Cinsiyet seçilmelidir.");
  if (ilgiAlanlari.length === 0) hatalar.push("En az bir ilgi alanı seçilmelidir.");
  if (mesaj === "") hatalar.push("Mesaj boş bırakılamaz.");

  if (hatalar.length > 0) {
    hataDiv.innerHTML = hatalar.join("<br>");
    hataDiv.classList.remove("d-none", "alert-success");
    hataDiv.classList.add("alert-danger");
  } else {
    hataDiv.innerHTML = "Form JavaScript kontrolünden başarıyla geçti.";
    hataDiv.classList.remove("d-none", "alert-danger");
    hataDiv.classList.add("alert-success");
  }
}

// Vue.js ile form kontrolü
const { createApp } = Vue;

createApp({
  data() {
    return {
      form: {
        adSoyad: "",
        email: "",
        telefon: "",
        konu: "",
        cinsiyet: "",
        ilgiAlanlari: [],
        mesaj: ""
      },
      vueHatalar: []
    };
  },
  methods: {
    vueKontrol() {
      this.vueHatalar = [];

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonRegex = /^[0-9]+$/;

      if (this.form.adSoyad.trim() === "") this.vueHatalar.push("Vue: Ad soyad boş bırakılamaz.");
      if (this.form.email.trim() === "") this.vueHatalar.push("Vue: E-posta boş bırakılamaz.");
      else if (!emailRegex.test(this.form.email)) this.vueHatalar.push("Vue: E-posta formatı hatalı.");
      if (this.form.telefon.trim() === "") this.vueHatalar.push("Vue: Telefon boş bırakılamaz.");
      else if (!telefonRegex.test(this.form.telefon)) this.vueHatalar.push("Vue: Telefon sadece rakamlardan oluşmalıdır.");
      if (this.form.konu === "") this.vueHatalar.push("Vue: Konu seçilmelidir.");
      if (this.form.cinsiyet === "") this.vueHatalar.push("Vue: Cinsiyet seçilmelidir.");
      if (this.form.ilgiAlanlari.length === 0) this.vueHatalar.push("Vue: En az bir ilgi alanı seçilmelidir.");
      if (this.form.mesaj.trim() === "") this.vueHatalar.push("Vue: Mesaj boş bırakılamaz.");

      if (this.vueHatalar.length === 0) {
        alert("Form Vue.js kontrolünden başarıyla geçti.");
      }
    }
  }
}).mount("#iletisimApp");
