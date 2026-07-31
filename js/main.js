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
    // Referencia al panel que se muestra u oculta
    const $panel = $("#infoExtra");

    // Saber si el panel esta visible: no tiene la clase d-none
    const visible = !$panel.hasClass("d-none");

    // Actualizar aria-expanded de inmediato para los lectores de pantalla
    $(this).attr("aria-expanded", String(!visible));

    if (visible) {
      // Si esta visible, se cierra con slideUp
      $panel.slideUp(500, function () {
        // Cuando termina la animacion se aplica d-none otra vez
        $panel.addClass("d-none");
      });
    } else {
      // Si esta oculto, se quita d-none, se oculta con jQuery y se despliega
      $panel.removeClass("d-none").hide().slideDown(500);
    }
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
