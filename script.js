// Función para alternar acordeones
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Cerrar todos los otros acordeones
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.accordion-icon').forEach(item => {
            item.textContent = '+';
            item.style.transform = 'rotate(0deg)';
        });
        
        // Abrir el acordeón actual
        content.classList.add('active');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Preguntas del cuestionario basadas en el PDF
const quizQuestions = [
    {
        question: "¿Qué frase describe mejor lo que es una zona de disponibilidad?",
        options: [
            "Un área geográfica que contiene recursos de AWS",
            "Un centro de datos único o un grupo de centros de datos dentro de una región",
            "Un centro de datos que utiliza un servicio de AWS para realizar operaciones específicas del servicio",
            "Un servicio que puedes utilizar para lanzar la infraestructura de AWS en tu propio centro de datos"
        ],
        correct: 1
    },
    {
        question: "¿Qué afirmación es VERDADERA respecto a la infraestructura global de AWS?",
        options: [
            "Una región consta de una única zona de disponibilidad",
            "Una zona de disponibilidad consta de dos o más regiones",
            "Una región consta de dos o más zonas de disponibilidad",
            "Una zona de disponibilidad consta de una única región"
        ],
        correct: 2
    },
    {
        question: "¿Qué factores deben tenerse en cuenta al seleccionar una región? (Selecciona la mejor combinación)",
        options: [
            "Conformidad con requisitos legales y proximidad a clientes",
            "Acceso ininterrumpido a soporte técnico y permisos personalizados",
            "Acceso a AWS CLI y soporte técnico",
            "Permisos personalizados y proximidad a clientes"
        ],
        correct: 0
    },
    {
        question: "¿Qué afirmación describe mejor a Amazon CloudFront?",
        options: [
            "Un servicio que permite lanzar la infraestructura con una estrategia de nube híbrida",
            "Un motor de computación sin servidor para contenedores",
            "Un servicio que permite enviar y recibir mensajes entre componentes de software",
            "Un servicio de entrega de contenido global"
        ],
        correct: 3
    },
    {
        question: "¿Qué sitio utiliza Amazon CloudFront para almacenar copias del contenido para una entrega más rápida?",
        options: [
            "Región",
            "Zona de disponibilidad",
            "Ubicación perimetral",
            "Origen"
        ],
        correct: 2
    },
    {
        question: "¿Qué acción puedes realizar con AWS Outposts?",
        options: [
            "Automatizar las acciones de los servicios y aplicaciones de AWS mediante scripts",
            "Acceder a asistentes y flujos de trabajo automatizados para realizar tareas en los servicios de AWS",
            "Desarrollar aplicaciones de AWS en lenguajes de programación compatibles",
            "Ampliar la infraestructura y los servicios de AWS a tu centro de datos en las instalaciones"
        ],
        correct: 3
    },
    {
        question: "¿Qué afirmación describe mejor la lista de control de acceso a la red predeterminada de una cuenta de AWS?",
        options: [
            "No tiene estado y deniega todo el tráfico entrante y saliente",
            "Tiene estado y permite todo el tráfico entrante y saliente",
            "No tiene estado y permite todo el tráfico entrante y saliente",
            "Tiene estado y deniega todo el tráfico entrante y saliente"
        ],
        correct: 2
    },
    {
        question: "¿Qué afirmación describe mejor la resolución DNS?",
        options: [
            "Lanzamiento de recursos en una red virtual que definas",
            "Almacenamiento de copias locales de contenido en ubicaciones perimetrales",
            "Conexión de una VPC a Internet",
            "Traducción de un nombre de dominio en una dirección IP"
        ],
        correct: 3
    },
    {
        question: "¿Cómo debes configurar la VPC según las prácticas recomendadas para una aplicación web con base de datos?",
        options: [
            "Instancias EC2 en subred privada y base de datos RDS en subred pública",
            "Instancias EC2 en subred pública y base de datos RDS en subred privada",
            "Ambos en subred pública",
            "Ambos en subred privada"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente se puede utilizar para establecer una conexión privada específica entre el centro de datos de tu empresa y AWS?",
        options: [
            "Subred privada",
            "DNS",
            "AWS Direct Connect",
            "Puerta de enlace privada virtual"
        ],
        correct: 2
    },
    {
        question: "¿Qué afirmación describe mejor los grupos de seguridad?",
        options: [
            "Tienen estado y deniegan todo el tráfico entrante de forma predeterminada",
            "Tienen estado y permiten todo el tráfico entrante de forma predeterminada",
            "No tienen estado y deniegan todo el tráfico entrante de forma predeterminada",
            "No tienen estado y permiten todo el tráfico entrante de forma predeterminada"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente se utiliza para conectar una VPC a Internet?",
        options: [
            "Subred pública",
            "Ubicación perimetral",
            "Grupo de seguridad",
            "Puerta de enlace de Internet"
        ],
        correct: 3
    },
    {
        question: "¿Qué servicio se utiliza para administrar los registros DNS de los nombres de dominio?",
        options: [
            "Amazon Virtual Private Cloud",
            "AWS Direct Connect",
            "Amazon CloudFront",
            "Amazon Route 53"
        ],
        correct: 3
    },
    {
        question: "¿Qué clase de almacenamiento de Amazon S3 convendría utilizar para datos de acceso poco frecuente pero disponibles inmediatamente?",
        options: [
            "S3 Intelligent-Tiering",
            "S3 Glacier Deep Archive",
            "S3 Standard-Infrequent Access",
            "S3 Glacier"
        ],
        correct: 2
    },
    {
        question: "¿Qué clases de almacenamiento de Amazon S3 están optimizadas para los datos de archivo? (Selecciona la mejor combinación)",
        options: [
            "S3 Standard y S3 Intelligent-Tiering",
            "S3 Glacier y S3 Glacier Deep Archive",
            "S3 Standard-Infrequent Access y S3 Intelligent-Tiering",
            "S3 Standard y S3 Standard-Infrequent Access"
        ],
        correct: 1
    },
    {
        question: "¿Qué afirmación es VERDADERA sobre los volúmenes de Amazon EBS y los sistemas de archivos de Amazon EFS?",
        options: [
            "Los volúmenes de EBS almacenan datos en una única zona de disponibilidad. Los sistemas de archivos de Amazon EFS almacenan datos en varias zonas de disponibilidad",
            "Los volúmenes de EBS almacenan datos en varias zonas de disponibilidad. Los sistemas de archivos de Amazon EFS almacenan datos en una única zona de disponibilidad",
            "Ambos almacenan datos en una única zona de disponibilidad",
            "Ambos almacenan datos en varias zonas de disponibilidad"
        ],
        correct: 0
    },
    {
        question: "¿Qué servicio de AWS es el mejor para almacenamiento de objetos?",
        options: [
            "Amazon Managed Blockchain",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon Simple Storage Service (Amazon S3)"
        ],
        correct: 3
    },
    {
        question: "¿En qué situaciones deberías utilizar Amazon Relational Database Service (Amazon RDS)? (Selecciona la mejor combinación)",
        options: [
            "Uso de SQL para organizar datos y almacenamiento en Amazon Aurora",
            "Uso de base de datos sin servidor y almacenamiento de valor de clave",
            "Ampliación de peticiones y base de datos sin servidor",
            "Almacenamiento de valor de clave y ampliación de peticiones"
        ],
        correct: 0
    },
    {
        question: "¿Qué afirmación describe mejor Amazon DynamoDB?",
        options: [
            "Un servicio que permite utilizar bases de datos relacionales en la nube de AWS",
            "Un servicio de base de datos de valor de clave sin servidor",
            "Un servicio que se puede utilizar para migrar bases de datos relacionales y no relacionales",
            "Una base de datos relacional de clase empresarial"
        ],
        correct: 1
    },
    {
        question: "¿Qué servicio se utiliza para consultar y analizar datos en un almacenamiento de datos?",
        options: [
            "Amazon Redshift",
            "Amazon Neptune",
            "Amazon DocumentDB",
            "Amazon ElastiCache"
        ],
        correct: 0
    }
];

// Generar el cuestionario
function generateQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (!quizForm) return;
    
    let quizHTML = '';
    
    quizQuestions.forEach((q, index) => {
        quizHTML += `
            <div class="question">
                <h3><span class="question-number">Pregunta ${index + 1}:</span> ${q.question}</h3>
                <ul class="options">
        `;
        
        q.options.forEach((option, optionIndex) => {
            quizHTML += `
                <li>
                    <label>
                        <input type="radio" name="question${index}" value="${optionIndex}">
                        ${option}
                    </label>
                </li>
            `;
        });
        
        quizHTML += `
                </ul>
            </div>
        `;
    });
    
    quizForm.innerHTML = quizHTML;
}

// Evaluar el cuestionario
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    if (!form || !resultDiv) return;
    
    let score = 0;
    let totalQuestions = quizQuestions.length;
    let results = [];
    
    // Verificar si todas las preguntas han sido respondidas
    let allAnswered = true;
    for (let i = 0; i < totalQuestions; i++) {
        const selectedOption = form.querySelector(`input[name="question${i}"]:checked`);
        if (!selectedOption) {
            allAnswered = false;
            break;
        }
    }
    
    if (!allAnswered) {
        alert('Por favor, responde todas las preguntas antes de evaluar.');
        return;
    }
    
    // Calcular puntuación
    for (let i = 0; i < totalQuestions; i++) {
        const selectedOption = form.querySelector(`input[name="question${i}"]:checked`);
        const selectedValue = parseInt(selectedOption.value);
        const isCorrect = selectedValue === quizQuestions[i].correct;
        
        if (isCorrect) {
            score++;
        }
        
        results.push({
            question: quizQuestions[i].question,
            selectedAnswer: quizQuestions[i].options[selectedValue],
            correctAnswer: quizQuestions[i].options[quizQuestions[i].correct],
            isCorrect: isCorrect
        });
    }
    
    // Calcular porcentaje
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Determinar clase de resultado
    let resultClass = '';
    let resultMessage = '';
    
    if (percentage >= 90) {
        resultClass = 'excellent';
        resultMessage = '¡Excelente! 🎉';
    } else if (percentage >= 70) {
        resultClass = 'good';
        resultMessage = '¡Bien hecho! 👍';
    } else {
        resultClass = 'needs-improvement';
        resultMessage = 'Necesitas repasar 📚';
    }
    
    // Mostrar resultado
    resultDiv.className = `result ${resultClass}`;
    resultDiv.style.display = 'block';
    
    let resultHTML = `
        <div>${resultMessage}</div>
        <div class="score-details">
            Puntuación: ${score}/${totalQuestions} (${percentage}%)
        </div>
    `;
    
    // Agregar revisión detallada
    resultHTML += '<div class="question-review"><h4>Revisión de respuestas:</h4>';
    
    results.forEach((result, index) => {
        const statusClass = result.isCorrect ? 'correct-answer' : 'incorrect-answer';
        const statusIcon = result.isCorrect ? '✅' : '❌';
        
        resultHTML += `
            <div style="margin-bottom: 15px; padding: 10px; background: ${result.isCorrect ? '#f8f9fa' : '#fff5f5'}; border-radius: 5px;">
                <strong>Pregunta ${index + 1}: ${statusIcon}</strong><br>
                <div class="your-answer">Tu respuesta: <span class="${statusClass}">${result.selectedAnswer}</span></div>
                ${!result.isCorrect ? `<div class="correct-answer-text">Respuesta correcta: <span class="correct-answer">${result.correctAnswer}</span></div>` : ''}
            </div>
        `;
    });
    
    resultHTML += '</div>';
    resultDiv.innerHTML = resultHTML;
    
    // Scroll al resultado
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Reiniciar el cuestionario
function resetQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    
    if (form) {
        // Limpiar todas las selecciones
        const radioButtons = form.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
    }
    
    if (resultDiv) {
        // Ocultar resultado
        resultDiv.style.display = 'none';
        resultDiv.innerHTML = '';
    }
    
    // Scroll al inicio del cuestionario
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        quizContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializar la página cuando se carga
document.addEventListener('DOMContentLoaded', function() {
    generateQuiz();
    
    // Agregar efecto de aparición suave a los elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    document.querySelectorAll('.accordion, .quiz-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Agregar atajos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter para evaluar
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        submitQuiz();
    }
    
    // Ctrl/Cmd + R para reiniciar (prevenir recarga y usar nuestra función)
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        resetQuiz();
    }
});

// Guardar progreso en localStorage (opcional)
function saveProgress() {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    
    const progress = {};
    
    for (let i = 0; i < quizQuestions.length; i++) {
        const selectedOption = form.querySelector(`input[name="question${i}"]:checked`);
        if (selectedOption) {
            progress[`question${i}`] = selectedOption.value;
        }
    }
    
    localStorage.setItem('awsQuizProgress', JSON.stringify(progress));
}

// Cargar progreso desde localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('awsQuizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        const form = document.getElementById('quiz-form');
        if (!form) return;
        
        Object.keys(progress).forEach(questionName => {
            const radio = form.querySelector(`input[name="${questionName}"][value="${progress[questionName]}"]`);
            if (radio) {
                radio.checked = true;
            }
        });
    }
}

// Agregar event listeners para guardar progreso automáticamente
document.addEventListener('change', function(e) {
    if (e.target.type === 'radio' && e.target.name.startsWith('question')) {
        saveProgress();
    }
});