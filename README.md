# 🗺️ Desarrollo Universitario Renovado - Experiencia UTB

Este proyecto es una plataforma web interactiva diseñada como prototipo funcional para la transformación de la asignatura **Desarrollo Universitario** en la **Universidad Tecnológica de Bolívar (UTB)**.

El objetivo es sustituir el enfoque teórico tradicional por una experiencia viva, práctica y accesible que conecte a los estudiantes de primer semestre con los recursos institucionales desde su primer día.

---

## 👥 Autores y Co-creadores
Este prototipo fue construido en el *Taller de Experimentar la Innovación (Parte II)* por el equipo de estudiantes:
* **Luis Felipe Salas Pajaró**
* **Jesús Miguel Díaz**
* **Gabriel Elles Guzmán**
* **Brayder Lombana Pombo**
* **Simón Elles**

---

## 🚀 Qué hay en la página ahora
* **Homepage renovada (`index.html`)** con un hero inicial, un bloque de bienvenida orientado y una sección de valor que explica cómo el proyecto transforma la materia.
* **Sección “Tu Portal de Orientación”** que presenta el propósito de la plataforma: rutas personalizadas, apoyo emocional y académico, y un buscador inteligente de soluciones.
* **Bloque de información relevante** que destaca el cambio a una materia práctica y vivencial, con talleres reales de Savio, mentorías y recorridos guiados.
* **Presentación de la propuesta de valor** con las 4 acciones clave: sesiones temáticas, charlas con avanzados, talleres de plataformas y planes de ruta personalizados.
* **Página de escuelas y rutas** que organiza laboratorios, talleres y apoyos por facultad/em> para transformar la adaptación universitaria.

---

## 🧩 Estructura del proyecto

```
app.py
requirements.txt
README.md
static/
    style.css
    script.js
    images/
        digital.avif
        schools/
templates/
    index.html
    about.html
    services.html
    utb.html
    escuela_digital.html
    escuela_ingenieria.html
    escuela_negocios.html
```

---

## 🔧 Requisitos e instalación

1. Clona o copia la carpeta del proyecto en tu equipo.
2. Asegúrate de tener instalado **Python 3**.
3. Instala Flask:

```bash
pip install Flask
```

4. Ejecuta la aplicación:

```bash
python app.py
```

5. Abre tu navegador en:

```bash
http://localhost:5000
```

---

## 📌 Notas adicionales
* La aplicación se ejecuta con Flask y usa plantillas Jinja en la carpeta `templates`.
* El estilo principal está en `static/style.css` y la interacción en `static/script.js`.
* Las rutas adicionales ya configuradas en `app.py` incluyen `/about`, `/utb`, `/services`, `/escuela/digital`, `/escuela/ingenieria` y `/escuela/negocios`.

---

Prototipo funcional diseñado en 2026 como parte de una estrategia de innovación pedagógica y experiencia estudiantil en UTB.
