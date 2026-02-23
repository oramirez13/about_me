$(document).ready(function () {
  // Mostrar la tarjeta con fade-in
  $(".card-perfil").hide().fadeIn(1000);

  // Efecto glow al pasar el mouse sobre la tarjeta
  $(".card-perfil").hover(
    function () {
      $(this).addClass("glow");
    },
    function () {
      $(this).removeClass("glow");
    }
  );

  // Toggle del botón Top Skills
  $("#btnExtra").click(function () {
    $("#infoExtra").slideToggle(500);
  });

  // Escritura automática en la terminal
  const texto =
    "root@orami:~$ Starting profile...\nAccess granted\nWelcome to the system";
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      $("#terminal-text").append(texto.charAt(i));
      i++;
      setTimeout(escribir, 40);
    }
  }
  escribir();

  // Verificación de certificados: solo una línea aunque se haga click varias veces
  let certificadoVerificado = false;

  $(".cert-btn").click(function () {
    if (!certificadoVerificado) {
      $("#terminal-text").append("<br>verifying certificate...");
      certificadoVerificado = true;
    }
  });
});