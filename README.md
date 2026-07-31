# about_me

Orami's professional profile with a cyberpunk terminal aesthetic. It is a static page built with HTML, CSS, JavaScript and jQuery, focused on information security, Linux and secure web development.

## Features

- Retro terminal aesthetic: neon green text, CRT scanlines and glitch effect.
- Animated terminal with automatic typing using jQuery.
- Profile card with sections for skills, certifications, languages and links.
- Responsive design with Bootstrap 5 and Bootstrap Icons.
- Accessibility: `prefers-reduced-motion` support, ARIA attributes and alternative image descriptions.

## Project structure

```
about_me/
├── index.html              Main profile page
├── css/
│   └── style.css           Custom styles using CSS variables
├── js/
│   └── main.js             Interactive logic (terminal, toggles, verification)
├── includes/
│   └── jquery-4.0.0.min.js Local jQuery library
└── img/
    ├── orami.png           Profile picture
    ├── favicon.svg         Browser tab icon
    └── ...
```

## How to run it

It does not require a server or additional dependencies. Open `index.html` directly in your browser or use a local server:

```bash
python3 -m http.server 8000
```

Then go to `http://localhost:8000`.

## Technologies

- HTML5, CSS3
- JavaScript with jQuery
- Bootstrap 5
- Bootstrap Icons

## Author

Orami (oramirez13)

- GitHub: https://github.com/oramirez13
- Web: https://orami.netlify.app/
