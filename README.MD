# Tema 2: Fundamentos sobre Cloud - AWS

Una página web interactiva que presenta el contenido del Tema 2 sobre Fundamentos de Cloud Computing con AWS, incluyendo secciones desplegables y un cuestionario evaluable.

## 📁 Estructura del Proyecto

```
aws-fundamentos-cloud/
├── index.html          # Página principal con todo el contenido
├── styles.css          # Estilos y diseño de la página
├── script.js           # Funcionalidad JavaScript (acordeones y cuestionario)
└── README.md           # Este archivo con instrucciones
```

## 🚀 Cómo usar

### Opción 1: Abrir localmente
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador web
3. ¡Listo! La página funcionará completamente

### Opción 2: Desplegar en GitHub Pages
1. Sube todos los archivos a tu repositorio de GitHub
2. Ve a Settings → Pages en tu repositorio
3. Selecciona "Deploy from a branch" → "main" → "/ (root)"
4. Tu página estará disponible en: `https://tu-usuario.github.io/nombre-repositorio`

### Opción 3: Otros servicios de hosting
- **Netlify**: Arrastra la carpeta con los archivos a netlify.com
- **Vercel**: Conecta tu repositorio de GitHub
- **GitHub Codespaces**: Abre directamente desde GitHub

## 📚 Contenido Incluido

### Secciones Principales:
- 🌍 **Infraestructura Global y Fiabilidad**
  - Selección de regiones
  - Zonas de disponibilidad
  - Ubicaciones perimetrales

- ⚙️ **Aprovisionamiento de Recursos AWS**
  - AWS Management Console
  - AWS CLI
  - SDKs
  - Elastic Beanstalk
  - CloudFormation

- 🔗 **Conectividad con AWS**
  - Amazon VPC
  - Puertas de enlace
  - AWS Direct Connect
  - Subredes y control de acceso
  - Amazon Route 53

- 💾 **Servicios de Almacenamiento**
  - Amazon EBS
  - Amazon S3
  - Amazon EFS
  - Comparaciones y casos de uso

- 🗄️ **Servicios de Bases de Datos**
  - Amazon RDS
  - Amazon Aurora
  - Amazon DynamoDB
  - Servicios adicionales

### 📝 Cuestionario Interactivo:
- 20 preguntas basadas en el contenido del PDF original
- Evaluación automática con puntuación
- Revisión detallada de respuestas
- Sistema de calificación (Excelente/Bien/Necesita mejorar)

## 🎨 Características

- ✅ **Diseño Responsivo**: Funciona en móviles, tablets y escritorio
- ✅ **Acordeones Interactivos**: Contenido organizado en secciones desplegables
- ✅ **Cuestionario Evaluable**: Sistema completo de evaluación
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales
- ✅ **Colores AWS**: Paleta de colores oficial de Amazon Web Services
- ✅ **Accesibilidad**: Navegación por teclado y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos, animaciones y diseño responsivo
- **JavaScript ES6**: Funcionalidad interactiva
- **SVG**: Gráficos vectoriales para el logo

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS/Android)

## 🔧 Personalización

### Cambiar colores:
Edita las variables CSS en `styles.css`:
```css
:root {
    --aws-orange: #ff9900;
    --aws-dark: #232f3e;
    --aws-light: #37475a;
}
```

### Agregar más preguntas:
Modifica el array `quizQuestions` en `script.js`:
```javascript
const quizQuestions = [
    {
        question: "Tu pregunta aquí",
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        correct: 0 // Índice de la respuesta correcta (0-3)
    }
];
```

## 📄 Licencia

Este proyecto es de uso educativo basado en el material "Tema 2: Fundamentos sobre Cloud" de Beatriz Magán Pinto.

## 🤝 Contribuciones

Si encuentras errores o quieres mejorar el contenido:
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas:
1. Verifica que todos los archivos estén en la misma carpeta
2. Asegúrate de que tu navegador tenga JavaScript habilitado
3. Revisa la consola del navegador (F12) para errores

---

**Autor**: Basado en el material de Beatriz Magán Pinto  
**Versión**: 1.0  
**Última actualización**: 2024