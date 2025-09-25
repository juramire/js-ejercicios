# Ejercicios de JavaScript, HTML y CSS (CFGS DAW :: FP)

Repositorio con ejercicios **básicos** de JavaScript, HTML y CSS para uso en clase y autoaprendizaje.  
 No requiere instalación ni dependencias: **no hay Node, npm ni bundlers**.

---

## Cómo ver los ejercicios

### Opción A) GitHub Pages (recomendado para el alumnado)
- Página principal: **`https://<tuusuario>.github.io/js-ejercicios/`**
- Cada ejercicio tiene su ruta propia, por ejemplo:  
  `https://<tuusuario>.github.io/js-ejercicios/ejercicios/01-hola-dom/`

> La web publica directamente el contenido de la carpeta `docs/`.

### Opción B) En local (sin instalar nada)
- Abre el archivo `index.html` de cada ejercicio con doble clic desde Finder/Explorer.  
  Ejemplo: `docs/ejercicios/01-hola-dom/index.html`

---

## Estructura del repositorio

```
js-ejercicios/
├─ .editorconfig
├─ .gitignore
├─ .vscode/              # recomendaciones del editor (opcional)
├─ docs/                 # carpeta publicada por GitHub Pages
│  ├─ index.html         # portada con enlaces a los ejercicios
│  └─ ejercicios/
│     ├─ 01-hola-dom/
│     │  ├─ index.html
│     │  ├─ styles.css
│     │  └─ script.js
│     ├─ 02-lista-dinamica/
│     │  ├─ index.html
│     │  ├─ styles.css
│     │  └; script.js
│     ├─ 03-calculadora/
│     │  ├─ index.html
│     │  ├─ styles.css
│     │  └─ script.js
│     └─ 04-eventos/
│        ├─ index.html
│        ├─ styles.css
│        └─ script.js
└─ README.md
```

---

## Índice de ejercicios (fase básica)

1. **01 · Hola DOM** — Selección y modificación básica del DOM, manejo de eventos de clic.  
   `docs/ejercicios/01-hola-dom/`

2. **02 · Lista dinámica** — Arrays + renderizado dinámico en el DOM (añadir/eliminar elementos).  
   `docs/ejercicios/02-lista-dinamica/`

3. **03 · Calculadora** — Entrada de datos con botones, buffer, evaluación controlada y manejo de errores.  
   `docs/ejercicios/03-calculadora/`

4. **04 · Eventos** — addEventListener, actualización de contenido y feedback visual.  
   `docs/ejercicios/04-eventos/`

> Los enlaces exactos están en `docs/index.html` (portada publicada en GitHub Pages).

---

## ➕ Cómo añadir un nuevo ejercicio

1. Crea la carpeta (nomenclatura `NN-descripcion`):
   ```
   docs/ejercicios/05-arrays-y-dom/
   ```
2. Dentro, crea `index.html`, `styles.css`, `script.js`.
3. Añade el enlace en `docs/index.html`.
4. **Commit y push** desde la raíz del repo:
   ```bash
   git add .
   git commit -m "feat: ejercicio 05 · Arrays y DOM"
   git push
   ```
5. Espera 1–2 minutos a que GitHub Pages actualice.

---

## FAQ

**¿Por qué no hay comandos `npm run` ni `package.json`?**  
Porque estos ejercicios son **estáticos** y se pueden abrir directamente en el navegador. Cuando pasemos a proyectos con **TypeScript**, **módulos ES**, o frameworks, añadiremos de nuevo `package.json` y scripts (posiblemente con Vite).

**Veo un botón / texto “Run” en GitHub, ¿sirve de algo aquí?**  
No. Ese botón suele aparecer cuando hay configuración de ejecución automatizada o detecta proyectos Node. En esta fase **no se usa**; ignóralo. (Si aún te aparece, revisa que no tengas `package.json` en la raíz.)

**¿Cómo “abro” ejercicios progresivamente para el alumnado?**  
Publica el repo con GitHub Pages y añade/enlaza cada ejercicio **cuando esté listo** en `docs/index.html`. Si quieres congelar versiones, usa **tags** (`ej-01`, `ej-02`, …).

---

## Licencia

- Todo el contenido de este repositorio (código y material didáctico) se publica bajo **Licencia MIT**.  
- Esto significa que **cualquier persona** puede usar, copiar, modificar y redistribuir este contenido, con o sin fines comerciales, **siempre** que mantenga el aviso de copyright y la licencia.
- El texto completo de la licencia está en [`LICENSE`](./LICENSE).
- Agradezco (no es obligatorio) que, si reutilizas material, incluyas una cita o referencia a este repo.

**Aviso**: si en el futuro algún directorio o archivo concreto necesitara una licencia distinta, se indicará explícitamente en ese directorio/archivo.

---

## Requisitos (opcional)

- Cualquier **navegador moderno**.
- (Para edición) **VSCode** con:
  - Prettier (formateo)
  - EditorConfig

---

## Autoría
- Docente: *Juan RB*
- Centro/Proyecto: *Apuntes DWEC - CFGS DAW *
- Contacto: *[github.com/juramire](https://github.com/juramire)*
