// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCollapsibleSections();
    initializeCharts();
    initializeQuiz();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Update ARIA attributes
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Collapsible sections functionality
function initializeCollapsibleSections() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const collapseBtn = this.querySelector('.collapse-btn');
            const contentId = collapseBtn.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            if (content) {
                const isExpanded = collapseBtn.getAttribute('aria-expanded') === 'true';
                
                // Toggle expanded state
                collapseBtn.setAttribute('aria-expanded', !isExpanded);
                content.classList.toggle('expanded');
                
                // Update screen reader text
                const srText = collapseBtn.querySelector('.sr-only');
                srText.textContent = isExpanded ? 'Expandir sección' : 'Contraer sección';
            }
        });
        
        // Keyboard support
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Charts initialization
function initializeCharts() {
    // Wait for Chart.js to load
    if (typeof Chart === 'undefined') {
        setTimeout(initializeCharts, 100);
        return;
    }

    // Chart.js default configuration
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.color = '#333333';

    // AWS Regions Bar Chart
    createRegionsChart();
    
    // Storage Types Pie Chart
    createStorageChart();
    
    // Performance Comparison Line Chart
    createPerformanceChart();
}

function createRegionsChart() {
    const ctx = document.getElementById('regionsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['América del Norte', 'Europa', 'Asia Pacífico', 'América del Sur', 'Oriente Medio', 'África'],
            datasets: [{
                label: 'Número de Regiones AWS',
                data: [6, 8, 10, 1, 3, 1],
                backgroundColor: [
                    '#FF9900',
                    '#4B9CD3',
                    '#232F3E',
                    '#FF9900',
                    '#4B9CD3',
                    '#232F3E'
                ],
                borderColor: '#232F3E',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución Global de Regiones AWS',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Regiones'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Continentes'
                    }
                }
            }
        }
    });
}

function createStorageChart() {
    const ctx = document.getElementById('storageChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['S3 Standard', 'S3 Standard-IA', 'S3 Glacier', 'S3 Glacier Deep Archive', 'S3 Intelligent-Tiering', 'S3 One Zone-IA'],
            datasets: [{
                data: [35, 20, 15, 10, 12, 8],
                backgroundColor: [
                    '#FF9900',
                    '#4B9CD3',
                    '#232F3E',
                    '#28A745',
                    '#FFC107',
                    '#DC3545'
                ],
                borderColor: '#FFFFFF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Uso de Clases de Almacenamiento S3',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function createPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1K ops/sec', '10K ops/sec', '100K ops/sec', '1M ops/sec', '10M ops/sec'],
            datasets: [
                {
                    label: 'DynamoDB',
                    data: [1, 5, 15, 25, 35],
                    borderColor: '#FF9900',
                    backgroundColor: 'rgba(255, 153, 0, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'RDS MySQL',
                    data: [2, 8, 20, 45, 80],
                    borderColor: '#4B9CD3',
                    backgroundColor: 'rgba(75, 156, 211, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Aurora',
                    data: [1.5, 6, 18, 35, 60],
                    borderColor: '#232F3E',
                    backgroundColor: 'rgba(35, 47, 62, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Comparación de Latencia por Operaciones por Segundo',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Latencia (ms)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Operaciones por Segundo'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Quiz functionality
let quizData = [];
let currentQuizAttempt = 0;
let bestScore = 0;
let userAnswers = {};

function initializeQuiz() {
    // Quiz questions from the PDF
    quizData = [
        {
            id: 1,
            question: "¿Qué frase describe mejor lo que es una zona de disponibilidad?",
            options: [
                "Un área geográfica que contiene recursos de AWS",
                "Un centro de datos único o un grupo de centros de datos dentro de una región",
                "Un centro de datos que utiliza un servicio de AWS para realizar operaciones específicas del servicio",
                "Un servicio que puedes utilizar para lanzar la infraestructura de AWS en tu propio centro de datos"
            ],
            correct: 1,
            explanation: "Una zona de disponibilidad es un centro de datos único o un grupo de centros de datos dentro de una región, ubicados a decenas de kilómetros de distancia entre sí.",
            hint: "Piensa en la definición básica de zona de disponibilidad y su relación con las regiones."
        },
        {
            id: 2,
            question: "¿Qué afirmación es VERDADERA respecto a la infraestructura global de AWS?",
            options: [
                "Una región consta de una única zona de disponibilidad",
                "Una zona de disponibilidad consta de dos o más regiones",
                "Una región consta de dos o más zonas de disponibilidad",
                "Una zona de disponibilidad consta de una única región"
            ],
            correct: 2,
            explanation: "Una región de AWS consta de dos o más zonas de disponibilidad, que están físicamente separadas pero conectadas por redes de baja latencia.",
            hint: "Recuerda la jerarquía: Región > Zona de Disponibilidad > Centro de Datos."
        },
        {
            id: 3,
            question: "¿Qué factores deben tenerse en cuenta al seleccionar una región? (Selecciona DOS)",
            options: [
                "Conformidad con los requisitos legales y de gestión de datos",
                "Proximidad a tus clientes",
                "Acceso ininterrumpido a soporte técnico",
                "Posibilidad de asignar permisos personalizados a distintos usuarios"
            ],
            correct: [0, 1],
            explanation: "Los factores principales son: conformidad legal, proximidad a clientes, servicios disponibles y precios.",
            hint: "Piensa en los factores que afectan directamente el rendimiento y cumplimiento legal."
        },
        {
            id: 4,
            question: "¿Qué afirmación describe mejor a Amazon CloudFront?",
            options: [
                "Un servicio que permite lanzar la infraestructura con una estrategia de nube híbrida",
                "Un motor de computación sin servidor para contenedores",
                "Un servicio que permite enviar y recibir mensajes entre componentes de software",
                "Un servicio de entrega de contenido global"
            ],
            correct: 3,
            explanation: "Amazon CloudFront es un servicio de entrega de contenido global (CDN) que utiliza ubicaciones perimetrales para entregar contenido más rápido.",
            hint: "CloudFront está relacionado con la entrega rápida de contenido a usuarios globales."
        },
        {
            id: 5,
            question: "¿Qué sitio utiliza Amazon CloudFront para almacenar copias del contenido?",
            options: [
                "Región",
                "Zona de disponibilidad",
                "Ubicación perimetral",
                "Origen"
            ],
            correct: 2,
            explanation: "Amazon CloudFront utiliza ubicaciones perimetrales para almacenar copias del contenido más cerca de los usuarios finales.",
            hint: "Piensa en dónde se almacenan las copias para entrega rápida a usuarios globales."
        },
        {
            id: 6,
            question: "¿Qué afirmación describe mejor la lista de control de acceso a la red predeterminada?",
            options: [
                "No tiene estado y deniega todo el tráfico entrante y saliente",
                "Tiene estado y permite todo el tráfico entrante y saliente",
                "No tiene estado y permite todo el tráfico entrante y saliente",
                "Tiene estado y deniega todo el tráfico entrante y saliente"
            ],
            correct: 2,
            explanation: "La ACL de red predeterminada no tiene estado (stateless) y permite todo el tráfico entrante y saliente por defecto.",
            hint: "Recuerda que las ACL son 'stateless' y la configuración predeterminada es permisiva."
        },
        {
            id: 7,
            question: "¿Qué afirmación describe mejor la resolución DNS?",
            options: [
                "Lanzamiento de recursos en una red virtual que definas",
                "Almacenamiento de copias locales de contenido en ubicaciones perimetrales",
                "Conexión de una VPC a Internet",
                "Traducción de un nombre de dominio en una dirección IP"
            ],
            correct: 3,
            explanation: "La resolución DNS es el proceso de traducir un nombre de dominio (como ejemplo.com) en una dirección IP.",
            hint: "DNS significa Domain Name System - piensa en qué hace este sistema."
        },
        {
            id: 8,
            question: "¿Cómo debes configurar la VPC según las prácticas recomendadas para una aplicación web con base de datos?",
            options: [
                "EC2 en subred privada y RDS en subred pública",
                "EC2 en subred pública y RDS en subred privada",
                "Ambos en subred pública",
                "Ambos en subred privada"
            ],
            correct: 1,
            explanation: "Las instancias EC2 del sitio web deben estar en subred pública para acceso de usuarios, mientras que las bases de datos deben estar en subred privada por seguridad.",
            hint: "Piensa en qué recursos necesitan acceso público y cuáles deben estar protegidos."
        },
        {
            id: 9,
            question: "¿Qué componente se utiliza para establecer una conexión privada específica entre tu centro de datos y AWS?",
            options: [
                "Subred privada",
                "DNS",
                "AWS Direct Connect",
                "Puerta de enlace privada virtual"
            ],
            correct: 2,
            explanation: "AWS Direct Connect proporciona una conexión privada dedicada entre tu centro de datos y AWS, reduciendo costos y aumentando el ancho de banda.",
            hint: "Busca el servicio que proporciona conexión 'directa' y dedicada."
        },
        {
            id: 10,
            question: "¿Qué afirmación describe mejor los grupos de seguridad?",
            options: [
                "Tienen estado y deniegan todo el tráfico entrante de forma predeterminada",
                "Tienen estado y permiten todo el tráfico entrante de forma predeterminada",
                "No tienen estado y deniegan todo el tráfico entrante de forma predeterminada",
                "No tienen estado y permiten todo el tráfico entrante de forma predeterminada"
            ],
            correct: 0,
            explanation: "Los grupos de seguridad tienen estado (stateful) y deniegan todo el tráfico entrante por defecto, pero permiten todo el tráfico saliente.",
            hint: "Los grupos de seguridad son 'stateful' y más restrictivos por defecto que las ACL."
        },
        {
            id: 11,
            question: "¿Qué componente se utiliza para conectar una VPC a Internet?",
            options: [
                "Subred pública",
                "Ubicación perimetral",
                "Grupo de seguridad",
                "Puerta de enlace de Internet"
            ],
            correct: 3,
            explanation: "Una puerta de enlace de Internet es la conexión entre una VPC e Internet, permitiendo el tráfico público.",
            hint: "Piensa en el componente que actúa como 'puerta' hacia Internet."
        },
        {
            id: 12,
            question: "¿Qué servicio se utiliza para administrar los registros DNS de los nombres de dominio?",
            options: [
                "Amazon Virtual Private Cloud",
                "AWS Direct Connect",
                "Amazon CloudFront",
                "Amazon Route 53"
            ],
            correct: 3,
            explanation: "Amazon Route 53 es el servicio web DNS de AWS que administra registros DNS y puede registrar nuevos nombres de dominio.",
            hint: "El nombre del servicio hace referencia a la 'ruta' del DNS (puerto 53)."
        },
        {
            id: 13,
            question: "¿Qué clase de almacenamiento de Amazon S3 conviene para datos de acceso poco frecuente pero disponibles inmediatamente?",
            options: [
                "S3 Intelligent-Tiering",
                "S3 Glacier Deep Archive",
                "S3 Standard-Infrequent Access",
                "S3 Glacier"
            ],
            correct: 2,
            explanation: "S3 Standard-Infrequent Access está optimizado para datos de acceso poco frecuente pero que requieren disponibilidad inmediata cuando se necesitan.",
            hint: "Busca la opción que mencione 'acceso poco frecuente' pero no archivado."
        },
        {
            id: 14,
            question: "¿Qué clases de almacenamiento de Amazon S3 están optimizadas para datos de archivo? (Selecciona DOS)",
            options: [
                "S3 Standard",
                "S3 Glacier",
                "S3 Intelligent-Tiering",
                "S3 Glacier Deep Archive"
            ],
            correct: [1, 3],
            explanation: "S3 Glacier y S3 Glacier Deep Archive están específicamente diseñados para archivado de datos a largo plazo con diferentes tiempos de recuperación.",
            hint: "Busca las opciones que contengan 'Glacier' en el nombre."
        },
        {
            id: 15,
            question: "¿Qué afirmación es VERDADERA sobre los volúmenes de Amazon EBS y los sistemas de archivos de Amazon EFS?",
            options: [
                "EBS almacena datos en una única zona de disponibilidad. EFS almacena datos en varias zonas de disponibilidad",
                "EBS almacena datos en varias zonas de disponibilidad. EFS almacena datos en una única zona de disponibilidad",
                "Ambos almacenan datos en una única zona de disponibilidad",
                "Ambos almacenan datos en varias zonas de disponibilidad"
            ],
            correct: 0,
            explanation: "Amazon EBS almacena datos en una única zona de disponibilidad, mientras que Amazon EFS es un servicio regional que almacena datos en múltiples zonas de disponibilidad.",
            hint: "EBS es específico de zona, EFS es regional (múltiples zonas)."
        },
        {
            id: 16,
            question: "¿Qué servicio de AWS es el mejor para almacenamiento de objetos?",
            options: [
                "Amazon Managed Blockchain",
                "Amazon Elastic File System (Amazon EFS)",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Simple Storage Service (Amazon S3)"
            ],
            correct: 3,
            explanation: "Amazon S3 es el servicio principal de AWS para almacenamiento de objetos, donde los datos se almacenan como objetos en buckets.",
            hint: "Piensa en el servicio 'Simple' de almacenamiento que maneja objetos."
        },
        {
            id: 17,
            question: "¿En qué situaciones deberías utilizar Amazon RDS? (Selecciona DOS)",
            options: [
                "Uso de una base de datos sin servidor",
                "Uso de SQL para organizar los datos",
                "Almacenamiento de datos en una base de datos de valor de clave",
                "Almacenamiento de datos en una base de datos de Amazon Aurora"
            ],
            correct: [1, 3],
            explanation: "Amazon RDS es ideal para bases de datos relacionales que usan SQL y es compatible con Amazon Aurora, entre otros motores.",
            hint: "RDS significa 'Relational Database Service' - piensa en características relacionales."
        },
        {
            id: 18,
            question: "¿Qué afirmación describe mejor Amazon DynamoDB?",
            options: [
                "Un servicio que permite utilizar bases de datos relacionales en la nube de AWS",
                "Un servicio de base de datos de valor de clave sin servidor",
                "Un servicio para migrar bases de datos relacionales y no relacionales",
                "Una base de datos relacional de clase empresarial"
            ],
            correct: 1,
            explanation: "Amazon DynamoDB es un servicio de base de datos NoSQL de valor de clave que es completamente sin servidor y se escala automáticamente.",
            hint: "DynamoDB es NoSQL, sin servidor y usa pares clave-valor."
        },
        {
            id: 19,
            question: "¿Qué servicio se utiliza para consultar y analizar datos en un almacenamiento de datos?",
            options: [
                "Amazon Redshift",
                "Amazon Neptune",
                "Amazon DocumentDB",
                "Amazon ElastiCache"
            ],
            correct: 0,
            explanation: "Amazon Redshift es el servicio de data warehousing de AWS, diseñado específicamente para análisis de big data y consultas complejas.",
            hint: "Busca el servicio específicamente diseñado para 'data warehousing'."
        }
    ];

    setupQuizEventListeners();
    loadQuizStats();
}

function setupQuizEventListeners() {
    const startBtn = document.getElementById('start-quiz');
    const submitBtn = document.getElementById('submit-quiz');
    const resetBtn = document.getElementById('reset-quiz');

    startBtn.addEventListener('click', startQuiz);
    submitBtn.addEventListener('click', submitQuiz);
    resetBtn.addEventListener('click', resetQuiz);
}

function loadQuizStats() {
    const attempts = localStorage.getItem('quiz-attempts') || 0;
    const bestScore = localStorage.getItem('quiz-best-score') || 0;
    
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('best-score').textContent = bestScore;
}

function startQuiz() {
    const container = document.getElementById('quiz-container');
    const startBtn = document.getElementById('start-quiz');
    const submitBtn = document.getElementById('submit-quiz');
    
    userAnswers = {};
    container.innerHTML = '';
    
    // Generate quiz questions
    quizData.forEach((question, index) => {
        const questionDiv = createQuestionElement(question, index);
        container.appendChild(questionDiv);
    });
    
    startBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
    
    // Scroll to quiz
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.setAttribute('data-question-id', question.id);
    
    let optionsHtml = '';
    question.options.forEach((option, optionIndex) => {
        const inputType = Array.isArray(question.correct) ? 'checkbox' : 'radio';
        const inputName = Array.isArray(question.correct) ? `question-${question.id}` : `question-${question.id}`;
        
        optionsHtml += `
            <li>
                <label>
                    <input type="${inputType}" name="${inputName}" value="${optionIndex}" 
                           aria-describedby="question-${question.id}-text">
                    ${option}
                </label>
            </li>
        `;
    });
    
    questionDiv.innerHTML = `
        <h3 id="question-${question.id}-text">${index + 1}. ${question.question}</h3>
        <ul class="quiz-options" role="group" aria-labelledby="question-${question.id}-text">
            ${optionsHtml}
        </ul>
        <div class="quiz-feedback" style="display: none;"></div>
    `;
    
    // Add event listeners for answer selection
    const inputs = questionDiv.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (Array.isArray(question.correct)) {
                // Multiple choice question
                const selectedValues = Array.from(questionDiv.querySelectorAll('input:checked'))
                    .map(input => parseInt(input.value));
                userAnswers[question.id] = selectedValues;
            } else {
                // Single choice question
                userAnswers[question.id] = parseInt(this.value);
            }
        });
    });
    
    return questionDiv;
}

function submitQuiz() {
    let correctAnswers = 0;
    const totalQuestions = quizData.length;
    
    quizData.forEach(question => {
        const questionDiv = document.querySelector(`[data-question-id="${question.id}"]`);
        const feedbackDiv = questionDiv.querySelector('.quiz-feedback');
        const userAnswer = userAnswers[question.id];
        
        let isCorrect = false;
        
        if (Array.isArray(question.correct)) {
            // Multiple choice question
            isCorrect = userAnswer && 
                       userAnswer.length === question.correct.length &&
                       userAnswer.every(answer => question.correct.includes(answer));
        } else {
            // Single choice question
            isCorrect = userAnswer === question.correct;
        }
        
        if (isCorrect) {
            correctAnswers++;
            feedbackDiv.className = 'quiz-feedback correct';
            feedbackDiv.innerHTML = `
                <strong>✓ Correcto!</strong><br>
                ${question.explanation}
            `;
        } else {
            feedbackDiv.className = 'quiz-feedback incorrect';
            let correctAnswerText = '';
            
            if (Array.isArray(question.correct)) {
                const correctOptions = question.correct.map(index => question.options[index]);
                correctAnswerText = correctOptions.join(' y ');
            } else {
                correctAnswerText = question.options[question.correct];
            }
            
            feedbackDiv.innerHTML = `
                <strong>✗ Incorrecto</strong><br>
                <strong>Respuesta correcta:</strong> ${correctAnswerText}<br>
                <strong>Explicación:</strong> ${question.explanation}
                <div class="quiz-hint">
                    <strong>💡 Pista:</strong> ${question.hint}
                </div>
            `;
        }
        
        feedbackDiv.style.display = 'block';
    });
    
    // Calculate and display results
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    displayQuizResults(score, correctAnswers, totalQuestions);
    
    // Update statistics
    currentQuizAttempt++;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('quiz-best-score', bestScore);
    }
    localStorage.setItem('quiz-attempts', currentQuizAttempt);
    loadQuizStats();
    
    // Hide submit button, show reset button
    document.getElementById('submit-quiz').style.display = 'none';
    document.getElementById('reset-quiz').style.display = 'inline-block';
}

function displayQuizResults(score, correct, total) {
    const resultsDiv = document.getElementById('quiz-results');
    let scoreClass = '';
    let message = '';
    
    if (score >= 90) {
        scoreClass = 'excellent';
        message = '¡Excelente! Dominas muy bien los conceptos de AWS Cloud.';
    } else if (score >= 70) {
        scoreClass = 'good';
        message = '¡Bien hecho! Tienes un buen entendimiento de los fundamentos.';
    } else if (score >= 50) {
        scoreClass = 'needs-improvement';
        message = 'Necesitas repasar algunos conceptos. ¡Sigue estudiando!';
    } else {
        scoreClass = 'poor';
        message = 'Te recomendamos revisar el material antes de intentar nuevamente.';
    }
    
    resultsDiv.innerHTML = `
        <h3>Resultados del Quiz</h3>
        <div class="score-display ${scoreClass}">
            ${score}% (${correct}/${total})
        </div>
        <p>${message}</p>
        <p>Puedes intentar el quiz nuevamente para mejorar tu puntuación.</p>
    `;
    
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz() {
    const container = document.getElementById('quiz-container');
    const resultsDiv = document.getElementById('quiz-results');
    const startBtn = document.getElementById('start-quiz');
    const submitBtn = document.getElementById('submit-quiz');
    const resetBtn = document.getElementById('reset-quiz');
    
    container.innerHTML = '';
    resultsDiv.style.display = 'none';
    userAnswers = {};
    
    startBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
    resetBtn.style.display = 'none';
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Alt+M
    if (e.altKey && e.key === 'm') {
        e.preventDefault();
        document.querySelector('.main-content').focus();
    }
    
    // Skip to navigation with Alt+N
    if (e.altKey && e.key === 'n') {
        e.preventDefault();
        document.querySelector('.navbar').focus();
    }
});

// Intersection Observer for navigation highlighting
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all nav links
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section's nav link
            const activeLink = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Performance optimization: Lazy load charts when sections become visible
const chartObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const chartId = entry.target.querySelector('canvas')?.id;
            if (chartId && !entry.target.dataset.chartLoaded) {
                entry.target.dataset.chartLoaded = 'true';
                // Charts are already initialized, but this could be used for lazy loading
            }
        }
    });
}, { threshold: 0.1 });

// Observe chart containers
document.addEventListener('DOMContentLoaded', function() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        chartObserver.observe(container);
    });
});

// Error handling for Chart.js
window.addEventListener('error', function(e) {
    if (e.message.includes('Chart')) {
        console.warn('Chart.js error detected. Attempting to reload charts...');
        setTimeout(initializeCharts, 1000);
    }
});

// Add CSS class for active navigation links
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        background-color: var(--primary-color);
        color: white;
    }
`;
document.head.appendChild(style);
