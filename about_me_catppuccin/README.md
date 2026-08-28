# about_me_catppuccin

Versión alternativa del perfil profesional de Orami con un estilo de terminal
"rice" limpio y oscuro, basado en la paleta de colores extraída de la imagen de
referencia `img/catppuccin_01.png`. A diferencia de la versión original, esta
versión **no incluye efectos cyberpunk** (sin glitch, sin scanlines CRT ni
resplandor neón).

## Paleta utilizada (extraída de la imagen de referencia y expandida)

| Variable          | Color    | Uso                          |
|-------------------|----------|------------------------------|
| `--base`          | `#2b2e40`| Fondo principal              |
| `--surface`       | `#343850`| Superficie de tarjetas       |
| `--text`          | `#cdd6f4`| Texto principal              |
| `--text-soft`     | `#869cc0`| Texto secundario             |
| `--blue`          | `#8ba1c6`| Azul: títulos y enlaces      |
| `--blue-strong`   | `#687fb0`| Azul profundo: bordes/hover  |
| `--lavender`      | `#888cbc`| Lavanda: certificaciones     |
| `--green`         | `#7b996d`| Verde: cursor y habilidades  |
| `--rose`          | `#a6646a`| Rosa: idiomas                |
| `--apricot`       | `#d8a657`| Albaricoque: palabras destacadas |
| `--teal`          | `#6ba4af`| Teal: subtítulos             |

## Funcionalidad (misma que la versión original, sin efectos cyberpunk)

- Terminal animada con tipeo automático usando jQuery.
- Tarjeta de perfil con habilidades, certificaciones, idiomas y enlaces.
- Diseño responsive con Bootstrap 5 y Bootstrap Icons.
- Accesibilidad: `prefers-reduced-motion` y atributos ARIA.

## Estructura del proyecto

```
about_me_catppuccin/
├── index.html              Página principal del perfil
├── css/
│   └── style.css           Estilos con variables CSS de la paleta
├── js/
│   └── main.js             Lógica interactiva (terminal, toggles, verificación)
├── includes/
│   └── jquery-4.0.0.min.js Librería local de jQuery
└── img/
    ├── orami.png           Foto de perfil
    ├── favicon.svg         Ícono de la pestaña del navegador
    └── catppuccin_01.png   Imagen de referencia para la paleta
```

## Tecnologías

- HTML5, CSS3
- JavaScript con jQuery
- Bootstrap 5
- Bootstrap Icons

## Autor

orami (oramirez13)

- GitHub: https://github.com/oramirez13
