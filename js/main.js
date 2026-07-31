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
    // Cambiar el estado del panel (visible u oculto)
    $("#infoExtra").slideToggle(500);

    // Actualizar aria-expanded para que los lectores de pantalla sepan si el panel esta abierto
    const expandido = $("#infoExtra").is(":visible");
    $(this).attr("aria-expanded", expandido);
  });

  // Escritura automática en la terminal
  const texto =
    "root@orami:~$ Starting profile...\nAccess granted\nWelcome to the system";
  let i = 0;

  // Bandera que indica si la escritura de la terminal termino
  let escrituraTerminada = false;

  function escribir() {
    if (i < texto.length) {
      $("#terminal-text").append(texto.charAt(i));
      i++;
      setTimeout(escribir, 40);
    } else {
      // Marcar el final de la escritura para habilitar los demas eventos
      escrituraTerminada = true;
    }
  }
  escribir();

  // Verificación de certificados: solo una línea aunque se haga click varias veces
  let certificadoVerificado = false;

  $(".cert-btn").click(function () {
    // Si la terminal aun esta escribiendo, se ignora el click para no mezclar el texto
    if (!escrituraTerminada) {
      return;
    }

    // Mostrar el mensaje de verificacion una sola vez
    if (!certificadoVerificado) {
      $("#terminal-text").append("<br>verifying certificate...");
      certificadoVerificado = true;
    }
  });
});
