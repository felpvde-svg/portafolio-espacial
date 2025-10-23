#  Portafolio Espacial - Felipe Jaramillo

![Angular](https://img.shields.io/badge/Angular-20.0.6-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)


##  Descripción

Portafolio personal interactivo con temática espacial/universo, desarrollado en Angular 20. El proyecto presenta una experiencia inmersiva inspirada en el cosmos, con un **splash screen de agujero negro** como botón de inicio y un **video de fondo con lluvia cósmica** que transporta al usuario a través del espacio mientras explora mi perspectiva, habilidades ,pokemones y contacto.

**Desarrollado por:** Felipe Jaramillo - Estudiante del Semillero Quipux

---

##  Características Destacadas

###  Diseño Temático Espacial
-  **Splash Screen con Agujero Negro**: Animación de entrada única con efecto de distorsión gravitacional
-  **Video de Fondo Cósmico**: Lluvia espacial animada (`banner-video2.mp4`) con efecto parallax
-  **Partículas Estelares**: Sistema de partículas flotantes que simulan estrellas y polvo cósmico
-  **Gradientes Galácticos**: Paleta de colores inspirada en nebulosas y galaxias
-  **Animaciones AOS**: Elementos que aparecen con efectos de scroll suaves

###  Funcionalidades Principales
- **Multiidioma (i18n)**: Soporte completo para Español e Inglés
- **Pokémon Explorer**: Buscador interactivo integrado con PokeAPI
- **Currículum Descargable**: CV disponible en formato PDF
- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Google Analytics**: Seguimiento de métricas de usuarios
- **Alto Rendimiento**: Bundle optimizado de 724.83 KB



##  Características del Proyecto

### Requisitos Académicos Cumplidos

| Requisito | Mínimo | Implementado | Estado |
|-----------|--------|--------------|--------|
| **Componentes** | 6 | 9+ | ✅ Superado |
| **Páginas** | 4 | 5 | ✅ Superado |
| **Servicios** | - | 7 | ✅ Implementado |
| **i18n (Idiomas)** | - | 2 (ES/EN) | ✅ Implementado |
| **Integración API** | - | PokeAPI | ✅ Implementado |

### Características Técnicas Avanzadas

 **Arquitectura Modular**: Componentes reutilizables y servicios independientes  
 **Lazy Loading**: Carga diferida de módulos para optimizar rendimiento  
 **Internacionalización**: Sistema completo de traducción con NGX Translate  
 **Animaciones Personalizadas**: Efectos visuales con CSS3 y Lottie  
 **Responsive Design**: Mobile-first con Bootstrap y SCSS  
 **SEO Optimizado**: Meta tags y estructura semántica  
 **Accesibilidad**: ARIA labels y navegación por teclado  

---

##  Tecnologías Utilizadas

### Frontend Core
- **Angular** 20.0.6 - Framework principal
- **TypeScript** 5.8.3 - Lenguaje de programación
- **RxJS** 6.5.5 - Programación reactiva
- **Zone.js** 0.15.1 - Change detection

### UI/UX Framework
- **Bootstrap** 4.5.0 - Sistema de grid y componentes
- **Ng-Bootstrap** 19.0.1 - Componentes Angular de Bootstrap
- **SCSS** - Preprocesador CSS para estilos personalizados

### Librerías de Diseño
- **FontAwesome Free** 5.14.0 - Iconografía
- **Lottie-web** 5.13.0 - Animaciones JSON
- **AOS** 2.3.4 - Animate On Scroll
- **Owl Carousel** 20.0.0 - Carrusel de imágenes

### Utilidades
- **NGX Translate** 15.0.0 - Internacionalización
- **NGX Google Analytics** 11.2.0 - Analítica web
- **NGX Owl Carousel** 20.0.0 - Carrusel responsive

### APIs Externas
- **PokeAPI** - API REST para datos de Pokémon
- **Google Analytics** - Tracking de usuarios


##  Componentes Implementados

El proyecto **supera los 6 componentes mínimos requeridos**, implementando un total de **9+ componentes** organizados en una arquitectura modular.

###  Componentes Generales (4 componentes)

#### 1️⃣ Header Component
**Ubicación:** `src/app/components/general/header/`

**Características:**
- Barra de navegación fija con efecto glassmorphism espacial
- Logo animado con efecto de rotación orbital
- Menú responsive con hamburguesa para móviles
- Selector de idioma (🇪🇸 Español / 🇬🇧 English)
- Links de navegación: "Acerca de mí", "Pokémon", "Contacto", "CURRÍCULUM"
- Smooth scroll hacia las secciones
- Efecto de transparencia al hacer scroll

**Tecnologías:**
- Angular Router para navegación
- Language Service para cambio de idioma
- SCSS con variables para colores temáticos

---

#### 2️⃣ Footer Component
**Ubicación:** `src/app/components/general/footer/`

**Características:**
- Diseño minimalista con tema oscuro espacial
- Texto: "Built with Angular by Felipe Jaramillo"
- Enlaces a redes sociales (iconos de FontAwesome)
- Copyright dinámico con año actual
- Efectos hover en enlaces

**Estilos:**
- Color de fondo: `rgba(10, 14, 39, 0.95)` (cosmic-dark)
- Tipografía espaciada con fuente monospace
- Bordes con efecto neón cyan

---

#### 3️⃣ Splash Screen Component 
**Ubicación:** `src/app/components/general/splash-screen/`

**Características Destacadas:**
- **Animación de agujero negro**: Efecto de distorsión gravitacional con CSS
- Partículas estelares rotando alrededor del agujero negro
- Botón circular central con efecto de succión
- Animación de entrada al cargar la página
- Transición fade-out suave hacia el contenido principal
- Duración: 3-4 segundos antes de mostrar el contenido

**Efectos Visuales:**
```scss
.black-hole {
  animation: spin 20s linear infinite, pulse 2s ease-in-out infinite;
  box-shadow: 0 0 60px rgba(0, 255, 255, 0.6);
  filter: blur(1px);
}
```

**Tecnología:**
- CSS3 Animations (keyframes)
- Angular Animations
- Lottie para efectos adicionales

---

#### 4️⃣ Dynamic Button Component
**Ubicación:** `src/app/components/general/dynamic-button/`

**Características:**
- Componente reutilizable para botones en todo el proyecto
- Props configurables: texto, icono, color, tamaño
- Estados: normal, hover, active, disabled
- Animaciones de escala y brillo en hover
- Soporte para iconos de FontAwesome
- Emisión de eventos personalizados

**Ejemplo de uso:**
```html
<app-dynamic-button 
  text="SALÚDAME" 
  icon="rocket"
  color="cyan"
  (click)="handleClick()">
</app-dynamic-button>
```

---
###  Componentes de Home (4 componentes)

#### 5️⃣ Banner Component 
**Ubicación:** `src/app/components/home/banner/`

**Características Principales:**
- **Video de fondo en loop**: `banner-video2.mp4` con lluvia cósmica
- Overlay oscuro semi-transparente para legibilidad
- Texto de presentación animado con efecto typing
- Título principal: "¡Hola! Mi nombre es **Felipe Jaramillo**"
- Subtítulo: "Estudiante del Semillero Quipux"
- Descripción personalizada sobre tecnología y programación
- Botón CTA: "SALÚDAME" con animación

**Contenido del Banner:**
```
Bienvenido a mi portafolio! Soy un estudiante enfocado en la 
programación, profundamente fascinado por la tecnología y el universo. 
Me apasiona entender el mundo y crear soluciones eficientes con un 
propósito colectivo.
```

**Efectos:**
- Partículas flotantes superpuestas
- Efecto parallax en el scroll
- Animaciones de entrada con AOS
- Texto con resplandor neón cyan

---

#### 6️⃣ About Component
**Ubicación:** `src/app/components/home/about/`

**Características:**
- Sección "Acerca de mí" con foto personal (`me6.jpg`)
- Foto con marco neón cyan y efecto hover de zoom
- Descripción detallada del perfil profesional
- Destacados con colores temáticos:
  - **Tecnología** (cyan)
  - **Programación** (cyan)
  - **Disciplinado** (cyan)
  - **Gym y calistenia** (cyan)
  - **Matemáticas** y **resolución de problemas** (cyan)
  - **Ingeniería en sistemas** (cyan)
  - **PHP** (cyan)
  - Mención de beca **Quipux**

**Skills Destacados:**
- Responsabilidad
- Liderazgo
- Disciplina & constancia
- Comunicación
- Respeto
- Resolución de problemas

**Animaciones:**
- Fade-in desde la izquierda para el texto
- Fade-in desde la derecha para la imagen
- Efecto de brillo en hover sobre la foto

---

#### 7️⃣ Pokemon Component 
**Ubicación:** `src/app/components/home/pokemon/`

**Características Principales:**
- **Buscador interactivo**: Input para nombre o ID del Pokémon
- **Integración con PokeAPI**: `https://pokeapi.co/api/v2/pokemon/`
- **Grid de Pokémon**: Muestra todos los Pokémon de la primera generación
- **Cards interactivas**: Diseño tipo tarjeta con hover effect
- **Modal de detalles**: Al hacer clic en un Pokémon se abre modal con:
  - Imagen oficial (official-artwork)
  - Nombre en español/inglés
  - Tipos (Water, Fire, Grass, etc.)
  - Descripción de especies (flavor text)
  - Estadísticas básicas

**Funcionalidades:**
```typescript
// Ejemplo de búsqueda
searchPokemon() {
  if (!this.searchName.trim()) {
    this.getPokemons();
    return;
  }
  
  this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.searchName.toLowerCase()}`)
    .subscribe({
      next: (data) => { /* Mostrar Pokémon */ },
      error: () => { this.error = 'Pokémon no encontrado.'; }
    });
}
```

**Estados de Carga:**
- Spinner animado mientras carga datos
- Mensaje de "Pokémon no encontrado" con animación
- Skeleton loaders para las cards

**Pokémon Mostrados:**
- Ivysaur, Venusaur, Charmander, Charmeleon, Charizard
- Squirtle, Wartortle, Blastoise, Caterpie, Metapod
- Beedrill, Pidgey, Pidgeotto, Pidgeot
- Rattata, Raticate, Spearrow, Fearow, Ekans, Arbok
- Pikachu, Sandslash, Nidoran-F, Nidorina

---

#### 8️⃣ Contact Component
**Ubicación:** `src/app/components/home/contact/`

**Características:**
- Título: "¡Salúdame!" con animación
- Subtítulo: "Ok, Y... ¿Ahora?"
- Descripción personalizada:
  ```
  Estaré encantado de recibir tu contacto si quieres conversar acerca de 
  nuevas oportunidades. Escríbeme, y te responderé tan pronto como vea 
  tu mensaje.
  ```
- Botón prominente: "CONTÁCTAME"
- Partículas estelares de fondo
- Footer con créditos

---

##  Paleta de Colores Espacial

### Colores Principales
```scss
// Colores base del tema espacial
$cosmic-dark: #0a0e27;           // Fondo principal oscuro
$cosmic-dark-secondary: #111827;  // Fondo secundario
$space-blue: #1e3a8a;            // Azul espacial
$deep-space: #0f172a;            // Espacio profundo

// Colores de acento neón
$cyan-neon: #00ffff;             // Cyan brillante (principal)
$cyan-glow: #06b6d4;             // Cyan suave
$purple-nebula: #6b46c1;         // Púrpura nebulosa
$pink-nebula: #ec4899;           // Rosa nebulosa

// Colores de énfasis
$star-white: #ffffff;            // Blanco estrella
$meteor-orange: #f97316;         // Naranja meteoro
$galaxy-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// Colores de estado
$success-green: #10b981;
$warning-yellow: #fbbf24;
$error-red: #ef4444;
```

### Efectos Visuales

**Glassmorphism (Header/Cards):**
```scss
.glass-effect {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 255, 255, 0.1);
}
```

**Efecto Neón:**
```scss
.neon-text {
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;
}

.neon-border {
  border: 2px solid #00ffff;
  box-shadow: 
    0 0 10px #00ffff,
    inset 0 0 10px #00ffff;
}
```

**Animación de Agujero Negro:**
```scss
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.black-hole {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, transparent 30%, #0a0e27 70%);
  border: 3px solid #00ffff;
  box-shadow: 
    0 0 60px rgba(0, 255, 255, 0.6),
    inset 0 0 40px rgba(0, 255, 255, 0.3);
  animation: spin 20s linear infinite, pulse 2s ease-in-out infinite;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 100px rgba(0, 255, 255, 0.8);
  }
}
```

**Partículas Estelares:**
```scss
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 5px #ffffff;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

---

##  Características Especiales del Diseño

### 1. Video de Fondo Cósmico
**Archivo:** `assets/images/banner-video2.mp4`

**Especificaciones:**
- Loop infinito
- Autoplay sin sonido
- Overlay oscuro para legibilidad: `rgba(0, 0, 0, 0.6)`
- Optimizado para rendimiento
- Fallback a imagen estática en móviles

**Implementación:**
```html
<video autoplay muted loop playsinline class="cosmic-video">
  <source src="assets/images/banner-video2.mp4" type="video/mp4">
</video>
<div class="video-overlay"></div>
```

---

### 2. Sistema de Partículas
**Configuración:**
- 80-100 partículas simultáneas
- Movimiento aleatorio suave
- Opacidad variable (0.3 - 0.8)
- Tamaños: 1px - 3px
- Velocidad: 0.5 - 2 px/s
- Conexión entre partículas cercanas (opcional)

**Efectos:**
- Partículas que se iluminan al pasar el cursor
- Movimiento parallax con el scroll
- Densidad adaptable según el dispositivo

---

### 3. Animaciones de Entrada (AOS)
**Tipos de animaciones usadas:**
```html
<!-- Fade desde la izquierda -->
<div data-aos="fade-right" data-aos-duration="1000">

<!-- Fade desde la derecha -->
<div data-aos="fade-left" data-aos-duration="1000">

<!-- Zoom in -->
<div data-aos="zoom-in" data-aos-duration="800">

<!-- Flip horizontal -->
<div data-aos="flip-left" data-aos-duration="1200">
```

**Configuración global:**
```typescript
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});
```

---

### 4. Efectos Hover Interactivos

**Cards de Pokémon:**
```scss
.pokemon-card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
    border-color: #00ffff;
  }
}
```

**Botones:**
```scss
.btn-cosmic {
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00ffff;
    color: #0a0e27;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    transform: scale(1.05);
  }
}
```

---


---

##  Internacionalización (i18n)

### Idiomas Soportados
- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **English**

### Estructura de Traducción

**assets/i18n/es.json:**
```json
{
  "header": {
    "about": "Acerca de mí",
    "pokemon": "Pokémon",
    "contact": "Contacto",
    "curriculum": "CURRÍCULUM"
  },
  "banner": {
    "greeting": "¡Hola! Mi nombre es",
    "title": "Felipe Jaramillo",
    "subtitle": "Estudiante del Semillero Quipux",
    "description": "Bienvenido a mi portafolio!...",
    "cta": "SALÚDAME"
  },
  "about": {
    "title": "Acerca de mí",
    "technology": "tecnología",
    "programming": "programación",
    "disciplined": "disciplinado"
  },
  "pokemon": {
    "title": "Pokémon Explorer",
    "search": "Buscar Pokemon por nombre",
    "button": "Buscar",
    "notFound": "Pokémon no encontrado"
  },
  "contact": {
    "title": "¡Salúdame!",
    "subtitle": "Ok, Y... ¿Ahora?",
    "description": "Estaré encantado de recibir tu contacto...",
    "cta": "CONTÁCTAME"
  }
}
```

**assets/i18n/en.json:**
```json
{
  "header": {
    "about": "About me",
    "pokemon": "Pokémon",
    "contact": "Contact",
    "curriculum": "RESUME"
  },
  "banner": {
    "greeting": "Hello! My name is",
    "title": "Felipe Jaramillo",
    "subtitle": "Quipux Seminar Student",
    "description": "Welcome to my portfolio!...",
    "cta": "SAY HELLO"
  }
}
```

### Uso en Componentes
```typescript
// Importar servicio
import { TranslateService } from '@ngx-translate/core';

// Inyectar en constructor
constructor(private translate: TranslateService) {}

// Cambiar idioma
changeLanguage(lang: 'es' | 'en') {
  this.translate.use(lang);
  localStorage.setItem('language', lang);
}

// Usar en template
{{ 'header.about' | translate }}
```




#  Servicios Desarrollados

El proyecto implementa **7 servicios especializados** que gestionan la lógica de negocio y las operaciones de la aplicación.

### 1️⃣ Analytics Service
**Ubicación:** `src/app/services/analytics/analytics.service.ts`

**Responsabilidades:**
- Integración con Google Analytics
- Tracking de pageviews
- Registro de eventos personalizados
- Métricas de interacción de usuario

**Métodos principales:**
```typescript
trackPageView(url: string)
trackEvent(category: string, action: string, label?: string)
trackTiming(category: string, variable: string, time: number)
```

---

### 2️⃣ Animations Service
**Ubicación:** `src/app/services/animations/animations.service.ts`

**Responsabilidades:**
- Gestión centralizada de animaciones
- Coordinación de efectos visuales
- Integración con Lottie
- Animaciones de transición entre rutas

**Funcionalidades:**
- Animaciones de entrada/salida de componentes
- Efectos de scroll personalizados
- Timeline de animaciones secuenciales

---

### 3️⃣ IP Service
**Ubicación:** `src/app/services/ipservice/ipservice.service.ts`

**Responsabilidades:**
- Detección de IP del visitante
- Geolocalización del usuario
- Información de ubicación para personalización

**Uso:**
```typescript
getUserIP(): Observable<any>
getUserLocation(): Observable<any>
```

---

### 4️⃣ Language Service
**Ubicación:** `src/app/services/language/language.service.ts`

**Responsabilidades:**
- Gestión de internacionalización (i18n)
- Cambio dinámico entre español e inglés
- Persistencia de preferencia del usuario en localStorage
- Carga de archivos de traducción desde `assets/i18n/`

**Métodos:**
```typescript
changeLanguage(lang: 'es' | 'en'): void
getCurrentLanguage(): string
getTranslation(key: string): Observable<string>
```

**Archivos de Traducción:**
- `assets/i18n/es.json` - Traducciones en español
- `assets/i18n/en.json` - Traducciones en inglés

---

### 5️⃣ Loading Service
**Ubicación:** `src/app/services/loading/loading.service.ts`

**Responsabilidades:**
- Control de estados de carga globales
- Spinner cósmico animado
- Observable del estado de carga
- Interceptor HTTP para mostrar loading automáticamente

**API:**
```typescript
show(): void
hide(): void
isLoading$: Observable<boolean>
```

---

### 6️⃣ Particles Service
**Ubicación:** `src/app/services/particles/particles.service.ts`

**Responsabilidades:**
- Generación de partículas espaciales
- Animación de estrellas flotantes
- Configuración de densidad y velocidad
- Optimización de rendimiento canvas

**Configuración:**
```typescript
{
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true
    }
  }
}
```

---

### 7️⃣ Pokemon Service
**Ubicación:** `src/app/services/pokemon/pokemon.service.ts`

**Responsabilidades:**
- Comunicación con PokeAPI
- Caché de resultados para optimizar requests
- Transformación de datos de la API
- Manejo de errores y timeouts

**Endpoints utilizados:**
```typescript
getPokemons(limit: number): Observable<any[]>
getPokemonByName(name: string): Observable<any>
getPokemonSpecies(id: number): Observable<any>
```

**URLs de API:**
- `https://pokeapi.co/api/v2/pokemon/${id}` - Datos del Pokémon
- `https://pokeapi.co/api/v2/pokemon-species/${id}` - Descripción y especies

---

##  Páginas del Portafolio

El proyecto incluye **5 páginas principales**, superando el requisito mínimo de 4 páginas.

### 1️⃣ Home (/) 
**Ruta:** `/` o `/home`

**Secciones incluidas:**
- **Banner**: Video cósmico de fondo con presentación principal
- **About**: Información personal, foto y descripción de habilidades
- **Pokémon Explorer**: Buscador interactivo de Pokémon
- **Contact**: Información de contacto y botón CTA

**Navegación interna:**
- Smooth scroll entre secciones
- Anclas a cada sección desde el header

---

### 2️⃣ Acerca de mí (/about)
**Ruta:** `/about` o sección `#about` en Home

**Contenido:**
- Foto personal con marco neón
- Descripción detallada del perfil
- Intereses y pasiones (tecnología, programación, universo)
- Experiencia académica y proyectos
- Skills técnicos y blandos
- Mención de tecnologías trabajadas (PHP, desarrollo web)
- Aspiraciones profesionales (Ingeniería en Sistemas)
- Referencia a la beca Quipux

---

### 3️⃣ Pokémon (/pokemon)
**Ruta:** `/pokemon` o sección `#pokemon` en Home

**Funcionalidades:**
- Grid completo de Pokémon de la primera generación
- Buscador por nombre o ID
- Input con placeholder: "Buscar Pokemon por nombre"
- Botón "Buscar" con estilo neón
- Modal emergente con información detallada
- Cards con hover effect y animaciones

**Datos mostrados:**
- Imagen oficial del Pokémon
- Nombre en español e inglés
- Tipo(s) del Pokémon
- Descripción de especies (flavor text)

---





#