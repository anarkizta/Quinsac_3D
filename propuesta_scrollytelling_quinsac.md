# Propuesta Detallada de Scrollytelling 3D para Quinsac Limitada
*Guion de interactividad, transiciones de modelos 3D y experiencia de usuario (UX/UI)*

---

## 1. Concepto Central: El "Monolito Industrial Polivalente"
El núcleo de Quinsac abarca desde el trabajo subterráneo e industrial (minería y celulosa) hasta la precisión milimétrica de la ingeniería, la normativa eléctrica (TE1, TC4) y las soluciones aéreas con drones [cite: 1]. Para un *scrollytelling* impactante, el modelo 3D central actúa como un núcleo que sufre una metamorfosis fluida (*morphing*) a lo largo del scroll, transitando desde la abstracción corporativa hasta la representación técnica de sus servicios clave.

---

## 2. Desglose Sección por Sección (Scrollytelling y Comportamiento 3D)

### Sección 1: El Impacto Inicial (Hero Section)
* **Texto Principal:** *"El talento es nuestro Patrimonio. Soluciones innovadoras en Ingeniería aplicada a las necesidades de nuestros Clientes."*
* **Modelo 3D:** El logotipo corporativo de Quinsac (los tres bloques diagonales) modelado en cristal translúcido con iluminación interna en verde lima (`#82DF26`).
* **Interactividad y Comportamiento:** 
  * Reacciona sutilmente a las coordenadas del cursor del mouse rotando dentro de un rango controlado (máximo $\pm 15^\circ$) para evitar fatiga visual [cite: 1].
  * Al iniciar el desplazamiento (*scroll*), el logotipo se descompone de forma fluida en una densa nube de partículas digitales verdes que descienden verticalmente [cite: 1].

### Sección 2: Identidad y Trayectoria (Quiénes Somos)
* **Texto Principal:** *"Quinsac Limitada: más de 15 años de trayectoria... especialistas desde la conceptualización hasta la inspección en la industria Minera, Metalurgia, Energía y Celulosa."*
* **Modelo 3D:** Las partículas de la sección anterior se reensamblan a la derecha de la pantalla para formar una **malla topográfica 3D (wireframe)** que conecta simbólicamente las operaciones del sur (Biobío / Los Ángeles) y del norte (Antofagasta / Calama).
* **Interactividad y Comportamiento:** 
  * La malla topográfica se va "dibujando" línea por línea en tiempo real con pulsos de luz láser verde a medida que el usuario avanza en la lectura de la trayectoria [cite: 1].

### Sección 3: El Gran Morphing Industrial (Áreas de Especialización)
*Este es el lienzo central inmersivo donde el objeto se transforma sin clics a través del scroll:*

1. **Fase A - Consultoría y Gestión Ambiental:**
   * *Transformación:* La malla topográfica se pliega y adopta la forma de un **núcleo orgánico geométrico**, con capas de suelo translúcidas y flujos de datos limpios que representan las resoluciones ambientales (DIA, EIA) y la optimización continua [cite: 1].
2. **Fase B - Ingeniería y Gerenciamiento:**
   * *Transformación:* El núcleo se rectifica geométricamente y se convierte en un **plano técnico extruido en 3D**, coronado por un casco de ingeniería flotante de alta precisión que representa los estándares de calidad e ITO.
3. **Fase C - Soluciones Aéreas con Drones:**
   * *Transformación:* El plano se abre paso y da origen a un **modelo minimalista de un dron**, cuyas hélices rotan de manera sincronizada con la velocidad del scroll, simulando fotogrametría y monitoreo continuo [cite: 1].
4. **Fase D - Construcción, Montaje y Puesta en Marcha:**
   * *Transformación:* El dron se desarma elegantemente en una red de **tuberías industriales entrelazadas (piping)**, soldaduras y estructuras metálicas que se auto-ensamblan en pantalla, representando obras mecánicas, eléctricas e instrumentación (TE1, TC4) [cite: 1].

### Sección 4: Experiencias de Éxito (Proyectos Relevantes)
* **Texto Principal:** Casos con clientes clave en Minería, Celulosa y Energía.
* **Modelo 3D:** La estructura de tuberías se aplana y fragmenta de forma fluida en **paneles tridimensionales flotantes de cristal oscuro** (tipo escaparates industriales).
* **Interactividad y Comportamiento:** Los paneles rotan en un carrusel espacial con efecto de paralaje avanzado, mostrando texturas reales y datos operativos de las faenas [cite: 1].

### Sección 5: Cierre e Interacción (Contacto)
* **Texto Principal:** *"Soluciones innovadoras en Ingeniería... Casa Matriz: Los Ángeles / Sucursal: Calama"*.
* **Modelo 3D:** Todos los paneles e hilos conductores se condensan rápidamente hacia el centro de la pantalla, volviendo a fusionarse en el **logotipo 3D original de Quinsac**.
* **Interactividad y Comportamiento:** El logotipo se estabiliza emitiendo un pulso lumínico suave en verde corporativo, atrayendo sutilmente la atención hacia el formulario de contacto y los canales oficiales (`contacto@quinsac.cl`) [cite: 1].

---

## 3. Recomendaciones Técnicas y de Rendimiento
* **Optimización de Activos:** Utilizar mallas de bajo poligonaje (*low-poly estilizado*) y compresión de texturas (WebP/KTX2) en los archivos `.glb` para garantizar 60 FPS estables tanto en dispositivos móviles como de escritorio [cite: 1].
* **Sincronización GSAP:** Implementar `ScrollTrigger` vinculado a `requestAnimationFrame` para que la interpolación de los estados de *morphing* no sufra saltos de fotogramas [cite: 1].
* **Accesibilidad:** Incluir un botón flotante superior de "Saltar Animación 3D" para usuarios que prefieran una navegación tradicional o experimenten sensibilidad al movimiento [cite: 1].
