# Experiencia UTB: Primer Semestre — Portal de Orientación Digital

Una plataforma web interactiva y responsiva que transforma la experiencia de **Desarrollo Universitario** en la **Universidad Tecnológica de Bolívar (UTB)**.

Diseñado para conectar a estudiantes de primer semestre con recursos institucionales desde el primer día, sustituyendo la teoría aburrida por una estrategia práctica, vivencial y accesible. **Diseñada por estudiantes para estudiantes.**

---

## Autores y Co-creadores
Este prototipo fue construido en el *Taller de Experimentar la Innovación (Parte II)* por el equipo de estudiantes:
* **Luis Felipe Salas Pajaró**
* **Jesús Miguel Díaz**
* **Gabriel Elles Guzmán**
* **Brayder Lombana Pombo**
* **Simón Elles**

---

## Características principales

### Interfaz Responsiva
- **Menú hamburguesa en móvil** — Se despliega fluidamente en pantallas menores a 768px
- **Navegación adaptativa** — Experiencia consistente en todas las páginas
- **Diseño fluido** — Optimizado para desktop, tablet y dispositivos móviles

### 4 Pilares de la Propuesta
1. **Sesiones Temáticas Semanales** — Inmersiones guiadas en Biblioteca, Bienestar, Consejería y laboratorios técnicos
2. **Charlas con Avanzados** — Espacios reales y honestos con estudiantes de semestres superiores
3. **Talleres Prácticos de Plataformas** — Sesiones interactivas para dominar Savio, registros y ecosistema TIC
4. **Plan de Ruta Personal** — Mapa personalizado según carrera y necesidades académicas, emocionales o profesionales

### Recursos por Escuela
- **Escuela de Transformación Digital** — Laboratorios de cómputo avanzados, laboratorio de comunicación y medios, tutorías de programación
- **Escuela de Ingeniería, Arquitectura & Diseño** — Talleres, plantas piloto, salas de diseño 3D, tutorías en ciencias básicas
- **Escuela de Negocios, Leyes y Sociedad** — Laboratorio financiero, consultorio jurídico, centro de emprendimiento

### Mapa de Recursos Filtrables
Sistema inteligente de búsqueda por necesidad del estudiante:
- **Apoyo Académico** — Tutorías, biblioteca, centro de escritura (CELEE)
- **Emocional / Bienestar** — Psicología, deportes, cultura, atención en salud primaria
- **Plataformas y TIC** — Soporte técnico, Portal Banner, Wi-Fi Eduroam
- **Crecimiento / Empleo** — Semilleros de investigación, bolsa de empleos, internacionalización, emprendimiento

---

## Páginas y Secciones

| Página | Ruta | Descripción |
|--------|------|-------------|
| **Inicio** | `/` | Homepage con propuesta de valor, 4 pilares y bienvenida |
| **Mapa de Recursos** | `/services` | Sistema filtrable de recursos por categoría |
| **Mi Escuela** | `/utb` | Selector visual de escuelas con rutas personalizadas |
| **Escuela Digital** | `/escuela/digital` | Recursos específicos de Transformación Digital |
| **Escuela Ingeniería** | `/escuela/ingenieria` | Recursos de Ingeniería, Arquitectura & Diseño |
| **Escuela Negocios** | `/escuela/negocios` | Recursos de Negocios, Leyes y Sociedad |
| **El Proyecto** | `/about` | Contexto, diagnóstico y solución implementada |

---

## Estructura del proyecto

```
app.py                          # Backend Flask
requirements.txt                # Dependencias Python
README.md                        # Este archivo
procfile                         # Configuración para deployment

static/
  ├── style.css                 # Estilos responsivos (diseño adaptativo)
  ├── script.js                 # Lógica interactiva (menú móvil, filtros, tabs)
  └── images/
      ├── digital.avif          # Imagen Escuela Digital
      ├── ingenieria.jpg        # Imagen Escuela Ingeniería
      └── negocios.jpeg         # Imagen Escuela Negocios

templates/
  ├── index.html                # Homepage
  ├── services.html             # Mapa de recursos filtrables
  ├── utb.html                  # Selector de escuelas
  ├── about.html                # Información del proyecto
  ├── escuela_digital.html       # Detalles Escuela Digital
  ├── escuela_ingenieria.html    # Detalles Escuela Ingeniería
  └── escuela_negocios.html      # Detalles Escuela Negocios
```

---

## Requisitos e instalación

### Prerrequisitos
- Python 3.8 o superior
- pip (gestor de paquetes Python)

### Pasos de instalación

1. **Clona o descarga** el proyecto:
```bash
git clone <tu-repositorio>
cd Innovation_Proyect-main
```

2. **Instala las dependencias**:
```bash
pip install -r requirements.txt
```

3. **Ejecuta la aplicación**:
```bash
python app.py
```

4. **Abre en tu navegador**:
```
http://localhost:5000
```

---

## Tecnologías utilizadas

- **Backend**: Python + Flask
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Plantillas**: Jinja2 (Flask templates)
- **Diseño**: CSS Grid, Flexbox, Media Queries
- **Interactividad**: JavaScript vanilla (sin frameworks)

---

## Características técnicas

### Responsividad
- Breakpoint mobile: 768px
- Logo ajustado a la izquierda en móvil
- Menú hamburguesa con animación X/hamburguesa
- Navegación fluida en todas las páginas

### Usabilidad
- Filtrado de recursos en tiempo real
- Navegación por tabs (pestañas)
- Selección de escuelas con visuales atractivas
- Footer consistente en todas las páginas

### Accesibilidad
- Atributos ARIA en el menú móvil (`aria-expanded`, `aria-label`)
- Semántica HTML correcta
- Contraste de colores adecuado
- Navegación por teclado soportada

---

## Despliegue

Para desplegar en producción (ej. Heroku):

1. Configura las variables de entorno necesarias
2. Asegúrate de que `debug=False` en `app.py`
3. Usa un servidor WSGI como Gunicorn
4. Revisa el archivo `procfile` para instrucciones específicas

---

## Notas adicionales

- La plataforma está optimizada para navegadores modernos (Chrome, Firefox, Safari, Edge)
- Todos los recursos se cargan desde la carpeta `static`
- Las plantillas se renderizan dinámicamente usando Jinja2
- El proyecto puede extenderse fácilmente con nuevas escuelas o recursos

---

## Contacto y contribuciones

Proyecto de innovación pedagógica diseñado en **2026** como parte de una estrategia de transformación de experiencia estudiantil en la **Universidad Tecnológica de Bolívar**.

**© 2026 Universidad Tecnológica de Bolívar. Propuesta de Innovación de Experiencia.**
