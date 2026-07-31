$(document).ready(function () {
  // Show the card with a fade-in effect
  $(".card-perfil").hide().fadeIn(1000);

  // Glow effect when hovering over the card
  $(".card-perfil").hover(
    function () {
      $(this).addClass("glow");
    },
    function () {
      $(this).removeClass("glow");
    }
  );

  // Top Skills button toggle
  $("#btnExtra").click(function () {
    // Reference to the panel that is shown or hidden
    const $panel = $("#infoExtra");

    // Know if the panel is visible: it does not have the d-none class
    const visible = !$panel.hasClass("d-none");

    // Update aria-expanded immediately for screen readers
    $(this).attr("aria-expanded", String(!visible));

    if (visible) {
      // If visible, close it with slideUp
      $panel.slideUp(500, function () {
        // When the animation ends, apply d-none again
        $panel.addClass("d-none");
      });
    } else {
      // If hidden, remove d-none, hide it with jQuery and slide it down
      $panel.removeClass("d-none").hide().slideDown(500);
    }
  });

  // Automatic typing in the terminal
  const texto =
    "root@orami:~$ Starting profile...\nAccess granted\nWelcome to the system";
  let i = 0;

  // Flag that indicates whether the terminal finished typing
  let escrituraTerminada = false;

  function escribir() {
    if (i < texto.length) {
      $("#terminal-text").append(texto.charAt(i));
      i++;
      setTimeout(escribir, 40);
    } else {
      // Mark the end of typing to enable the other events
      escrituraTerminada = true;
    }
  }
  escribir();

  // Certificate verification: only one line even if clicked several times
  let certificadoVerificado = false;

  $(".cert-btn").click(function () {
    // If the terminal is still typing, ignore the click so the text is not mixed
    if (!escrituraTerminada) {
      return;
    }

    // Show the verification message only once
    if (!certificadoVerificado) {
      $("#terminal-text").append("<br>verifying certificate...");
      certificadoVerificado = true;
    }
  });
});
