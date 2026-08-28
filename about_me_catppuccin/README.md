# about_me_catppuccin

Versión alternativa del perfil profesional de Orami con la paleta de colores
**Catppuccin Mocha** (estética "rice" de terminal), manteniendo la estructura y
funcionalidad del proyecto original `about_me` (que conserva su tema cyberpunk
verde neón intacto).

## Paleta Catppuccin Mocha utilizada

| Variable        | Color    | Uso                          |
|-----------------|----------|------------------------------|
| `--base`        | `#1e1e2e`| Fondo principal              |
| `--surface`     | `#313244`| Superficie de tarjetas       |
| `--text`        | `#cdd6f4`| Texto principal              |
| `--accent`      | `#89b4fa`| Azul (acento y bordes)       |
| `--accent-soft` | `#a6e3a1`| Verde (subtítulos)           |
| `--mauve`       | `#cba6f7`| Malva (estados hover)        |

## Funcionalidad (idéntica a la versión original)

- Terminal animada con tipeo automático usando jQuery.
- Tarjeta de perfil con habilidades, certificaciones, idiomas y enlaces.
- Diseño responsive con Bootstrap 5 y Bootstrap Icons.
- Accesibilidad: `prefers-reduced-motion`, atributos ARIA y descripciones alternativas de imagen.

## Estructura del proyecto

```
about_me_catppuccin/
├── index.html              Página principal del perfil
├── css/
│   └── style.css           Estilos con variables CSS de Catppuccin
├── js/
│   └── main.js             Lógica interactiva (terminal, toggles, verificación)
├── includes/
│   └── jquery-4.0.0.min.js Librería local de jQuery
└── img/
    ├── orami.png           Foto de perfil
    └── favicon.svg         Ícono de la pestaña del navegador
```

## Tecnologías

- HTML5, CSS3
- JavaScript con jQuery
- Bootstrap 5
- Bootstrap Icons

## Autor

orami (oramirez13)

- GitHub: https://github.com/oramirez13
