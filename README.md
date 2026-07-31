# about_me

Perfil profesional de Orami con estetica cyberpunk estilo terminal. Es una pagina estatica construida con HTML, CSS, JavaScript y jQuery, enfocada en seguridad informatica, Linux y desarrollo web seguro.

## Caracteristicas

- Estetica terminal retro: texto verde neón, lineas de escaneo CRT y efecto glitch.
- Terminal animada con escritura automatica usando jQuery.
- Tarjeta de perfil con secciones de habilidades, certificaciones, idiomas y enlaces.
- Diseño responsive con Bootstrap 5 e iconos de Bootstrap Icons.
- Accesibilidad: soporte para `prefers-reduced-motion`, atributos ARIA y descripciones alternativas en imagenes.

## Estructura del proyecto

```
about_me/
├── index.html              Página principal del perfil
├── css/
│   └── style.css           Estilos personalizados con variables CSS
├── js/
│   └── main.js             Lógica interactiva (terminal, toggles, verificacion)
├── includes/
│   └── jquery-4.0.0.min.js Biblioteca jQuery local
└── img/
    ├── orami.png           Foto de perfil
    ├── favicon.svg         Icono de la pestana del navegador
    └── ...
```

## Como ejecutarlo

No requiere servidor ni dependencias adicionales. Abre `index.html` directamente en el navegador o usa un servidor local:

```bash
python3 -m http.server 8000
```

Luego entra a `http://localhost:8000`.

## Tecnologias

- HTML5, CSS3
- JavaScript con jQuery
- Bootstrap 5
- Bootstrap Icons

## Autor

Orami (oramirez13)

- GitHub: https://github.com/oramirez13
- Web: https://orami.netlify.app/
