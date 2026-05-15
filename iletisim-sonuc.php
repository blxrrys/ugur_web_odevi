<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>İletişim Formu Sonucu</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container my-5">
    <div class="card shadow">
      <div class="card-header bg-dark text-white">
        <h1 class="h4 mb-0">Gönderilen Form Bilgileri</h1>
      </div>
      <div class="card-body">
        <?php
          if ($_SERVER["REQUEST_METHOD"] == "POST") {
              echo "<p><strong>Ad Soyad:</strong> " . htmlspecialchars($_POST["adSoyad"] ?? "") . "</p>";
              echo "<p><strong>E-posta:</strong> " . htmlspecialchars($_POST["email"] ?? "") . "</p>";
              echo "<p><strong>Telefon:</strong> " . htmlspecialchars($_POST["telefon"] ?? "") . "</p>";
              echo "<p><strong>Konu:</strong> " . htmlspecialchars($_POST["konu"] ?? "") . "</p>";
              echo "<p><strong>Cinsiyet:</strong> " . htmlspecialchars($_POST["cinsiyet"] ?? "") . "</p>";

              echo "<p><strong>İlgi Alanları:</strong> ";
              if (isset($_POST["ilgiAlanlari"])) {
                  echo htmlspecialchars(implode(", ", $_POST["ilgiAlanlari"]));
              } else {
                  echo "Seçilmedi";
              }
              echo "</p>";

              echo "<p><strong>Mesaj:</strong> " . nl2br(htmlspecialchars($_POST["mesaj"] ?? "")) . "</p>";
          } else {
              echo "<div class='alert alert-danger'>Form verisi gönderilmedi.</div>";
          }
        ?>
        <a href="iletisim.html" class="btn btn-primary mt-3">Forma Geri Dön</a>
      </div>
    </div>
  </div>
</body>
</html>
