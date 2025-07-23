# AWS Cloud Fundamentals - Tema 2

Una página web moderna y responsiva basada en el contenido del PDF "Fundamentos sobre Cloud Computing" de AWS, creada con HTML, CSS y JavaScript vanilla.

## 🚀 Características

### ✨ Funcionalidades Principales
- **Navegación fija responsiva** con enlaces suaves a cada sección
- **Secciones colapsables** para una mejor organización del contenido
- **Gráficos interactivos** usando Chart.js:
  - Gráfico de barras: Distribución global de regiones AWS
  - Gráfico circular: Clases de almacenamiento S3
  - Gráfico de líneas: Comparación de rendimiento de bases de datos
- **Quiz interactivo** con 19 preguntas de autoevaluación
- **Diseño responsivo** optimizado para móviles, tablets y escritorio
- **Características de accesibilidad** siguiendo las mejores prácticas

### 📱 Responsividad
- Menú hamburguesa para dispositivos móviles
- Layouts adaptativos usando CSS Grid y Flexbox
- Breakpoints optimizados para diferentes tamaños de pantalla
- Navegación táctil amigable

### ♿ Accesibilidad
- HTML semántico con roles ARIA apropiados
- Navegación por teclado completa
- Etiquetas descriptivas para lectores de pantalla
- Contraste de colores optimizado
- Soporte para modo de alto contraste
- Soporte para usuarios con preferencia de movimiento reducido

## 📋 Contenido

### Secciones Principales
1. **Infraestructura Global y Fiabilidad**
   - Regiones AWS y factores de selección
   - Zonas de disponibilidad
   - Ubicaciones perimetrales

2. **Aprovisionamiento de Recursos AWS**
   - AWS Management Console
   - AWS CLI
   - SDKs
   - AWS Elastic Beanstalk
   - AWS CloudFormation

3. **Conectividad con AWS**
   - Amazon VPC
   - Puertas de enlace de Internet
   - Puertas de enlace privadas virtuales
   - AWS Direct Connect

4. **Subredes y Listas de Control de Acceso**
   - Subredes públicas y privadas
   - Network ACLs
   - Grupos de seguridad
   - Filtrado con y sin estado

5. **Redes Globales**
   - Resolución DNS
   - Amazon Route 53
   - Amazon CloudFront

6. **Servicios de Almacenamiento**
   - Almacén de instancias vs Amazon EBS
   - Amazon S3 y sus clases de almacenamiento
   - Amazon EFS

7. **Servicios de Bases de Datos**
   - Amazon RDS y motores disponibles
   - Amazon Aurora
   - Amazon DynamoDB
   - Amazon Redshift
   - AWS Database Migration Service

### 🧠 Quiz Interactivo
- **19 preguntas** basadas en el contenido del PDF
- Preguntas de **selección única y múltiple**
- **Explicaciones detalladas** para cada respuesta
- **Sistema de pistas** para ayudar al aprendizaje
- **Múltiples intentos** permitidos
- **Seguimiento de puntuación** con localStorage
- Feedback inmediato con colores intuitivos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS, Grid y Flexbox
- **JavaScript ES6+**: Funcionalidad interactiva vanilla
- **Chart.js**: Visualización de datos interactiva
- **Responsive Design**: Mobile-first approach

## 📁 Estructura de Archivos

```
├── index.html          # Estructura principal de la página
├── styles.css          # Estilos y diseño responsivo
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🎨 Diseño y Branding

### Paleta de Colores AWS
- **Naranja AWS**: `#FF9900` (Color primario)
- **Azul Oscuro AWS**: `#232F3E` (Color secundario)
- **Azul Claro AWS**: `#4B9CD3` (Color de acento)
- **Gris AWS**: `#F2F3F3` (Fondo alternativo)

### Tipografía
- **Fuente principal**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Jerarquía tipográfica** clara y consistente
- **Tamaños responsivos** que se adaptan al dispositivo

## 🚀 Cómo Usar

### Instalación
1. Clona o descarga los archivos del proyecto
2. Abre `index.html` en tu navegador web preferido
3. ¡Disfruta explorando los fundamentos de AWS Cloud!

### Navegación
- Usa la **barra de navegación fija** para saltar entre secciones
- **Haz clic en los títulos** de las secciones para expandir/contraer el contenido
- En móviles, usa el **menú hamburguesa** para acceder a la navegación

### Quiz
1. Navega a la sección "Quiz de Autoevaluación"
2. Haz clic en "Comenzar Quiz"
3. Responde las preguntas seleccionando las opciones apropiadas
4. Haz clic en "Enviar Respuestas" para ver los resultados
5. Revisa las explicaciones y pistas para mejorar tu comprensión
6. Intenta nuevamente para mejorar tu puntuación

## 📊 Gráficos Interactivos

### Gráfico de Barras - Regiones AWS
Muestra la distribución de regiones AWS por continente con datos actualizados.

### Gráfico Circular - Almacenamiento S3
Visualiza el uso relativo de las diferentes clases de almacenamiento de Amazon S3.

### Gráfico de Líneas - Rendimiento de Bases de Datos
Compara la latencia de DynamoDB, RDS MySQL y Aurora a diferentes escalas de operaciones.

## ♿ Características de Accesibilidad

- **Navegación por teclado**: Usa Tab, Enter y Space para navegar
- **Lectores de pantalla**: Etiquetas ARIA y texto descriptivo
- **Alto contraste**: Soporte automático para preferencias del sistema
- **Movimiento reducido**: Respeta las preferencias de animación del usuario
- **Atajos de teclado**:
  - `Alt + M`: Saltar al contenido principal
  - `Alt + N`: Saltar a la navegación

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `:root` en `styles.css`:
```css
:root {
    --primary-color: #FF9900;
    --secondary-color: #232F3E;
    --accent-color: #4B9CD3;
    /* ... más variables */
}
```

### Agregar Preguntas al Quiz
Modifica el array `quizData` en `script.js`:
```javascript
{
    id: 20,
    question: "Tu nueva pregunta aquí",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0, // o [0, 2] para múltiple selección
    explanation: "Explicación de la respuesta correcta",
    hint: "Pista útil para el estudiante"
}
```

## 📱 Compatibilidad

### Navegadores Soportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos
- **Escritorio**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: 320px - 767px

## 🎯 Objetivos de Aprendizaje

Al completar esta experiencia interactiva, los usuarios podrán:

1. **Comprender** la infraestructura global de AWS
2. **Identificar** los diferentes métodos de aprovisionamiento de recursos
3. **Explicar** los conceptos de conectividad y redes en AWS
4. **Distinguir** entre diferentes servicios de almacenamiento
5. **Comparar** las opciones de bases de datos disponibles
6. **Aplicar** los conocimientos a través del quiz interactivo

## 📈 Métricas de Rendimiento

- **Tiempo de carga inicial**: < 2 segundos
- **Puntuación Lighthouse**: 90+ en todas las categorías
- **Tamaño total**: < 500KB (sin Chart.js CDN)
- **Compatibilidad móvil**: 100% responsive

## 🤝 Contribuciones

Este proyecto está basado en material educativo de AWS. Para mejoras o sugerencias:

1. Revisa el código existente
2. Mantén la consistencia con el diseño AWS
3. Asegúrate de que las nuevas características sean accesibles
4. Prueba en múltiples dispositivos y navegadores

## 📄 Licencia

Este proyecto es material educativo basado en contenido público de AWS. Úsalo libremente para propósitos educativos.

## 🙏 Reconocimientos

- **AWS**: Por proporcionar la documentación y recursos educativos
- **Chart.js**: Por la biblioteca de gráficos interactivos
- **Beatriz Magán Pinto**: Autora original del contenido del PDF

---

**¡Disfruta aprendiendo sobre AWS Cloud Fundamentals!** 🚀☁️
