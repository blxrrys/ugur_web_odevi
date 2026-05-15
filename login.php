<?php
$dogruKullanici = "b211210571@sakarya.edu.tr";
$dogruSifre = "b211210571";
$ogrenciNo = "B211210571";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullaniciAdi = trim($_POST["kullaniciAdi"] ?? "");
    $sifre = trim($_POST["sifre"] ?? "");

    if ($kullaniciAdi === $dogruKullanici && $sifre === $dogruSifre) {
        echo "<!DOCTYPE html>
        <html lang='tr'>
        <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Giriş Başarılı</title>
          <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>
        </head>
        <body class='bg-light'>
          <div class='container text-center mt-5'>
            <div class='alert alert-success shadow'>
              <h1>Hoşgeldiniz $ogrenciNo</h1>
              <p>Giriş işlemi başarılı.</p>
              <a href='index.html' class='btn btn-primary'>Ana Sayfaya Dön</a>
            </div>
          </div>
        </body>
        </html>";
    } else {
        header("Location: login.html?hata=1");
        exit();
    }
} else {
    header("Location: login.html?hata=1");
    exit();
}
?>
