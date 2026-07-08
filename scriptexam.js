// script.js - Funcionalidad con questions.js
document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    let currentExam = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let timer = null;
    let timeLeft = 1500; // 25 minutos en segundos

    // Elementos del DOM
    const welcomeSection = document.getElementById('welcome-section');
    const examSelection = document.getElementById('exam-selection');
    const examSection = document.getElementById('exam-section');
    const resultsModal = document.getElementById('results-modal');
    const startExamBtn = document.getElementById('start-exam-btn');
    const examTitle = document.getElementById('exam-title');
    const questionCounter = document.getElementById('question-counter');
    const domainText = document.getElementById('domain-text');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const timeDisplay = document.getElementById('time-display');
    const progressFill = document.getElementById('progress-fill');
    const scorePercentage = document.getElementById('score-percentage');
    const resultMessage = document.getElementById('result-message');
    const examName = document.getElementById('exam-name');
    const detailedResults = document.getElementById('detailed-results');
    const restartBtn = document.getElementById('restart-btn');
    const backToExamsBtn = document.getElementById('back-to-exams-btn');
    const examsContainer = document.getElementById('exams-container');

    // Inicialización
    examSection.style.display = 'none';
    resultsModal.style.display = 'none';
    examSelection.style.display = 'none';

    // Cargar datos de exámenes
    loadExamData();

    // Event listener para el botón de comenzar examen
    startExamBtn.addEventListener('click', function() {
        welcomeSection.style.display = 'none';
        examSelection.style.display = 'block';
    });

    // Event listeners para navegación del examen
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', finishExam);
    restartBtn.addEventListener('click', restartExam);
    backToExamsBtn.addEventListener('click', backToExams);

    // Función para cargar datos de exámenes
    function loadExamData() {
        // Los datos ya están disponibles en examData (definido en questions.js)
        renderExamCards();
    }

    // Función para renderizar las tarjetas de examen
    function renderExamCards() {
        if (!examData) {
            console.error('examData no está definido. Asegúrate de que questions.js se cargue correctamente.');
            return;
        }

        examsContainer.innerHTML = '';
        
        Object.values(examData).forEach(exam => {
            const examCard = document.createElement('div');
            examCard.className = `exam-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer`;
            examCard.setAttribute('data-exam', exam.id);
            
            const colorClasses = {
                blue: 'bg-blue-100 text-blue-800',
                green: 'bg-green-100 text-green-800',
                purple: 'bg-purple-100 text-purple-800',
                yellow: 'bg-yellow-100 text-yellow-800',
                red: 'bg-red-100 text-red-800',
                indigo: 'bg-indigo-100 text-indigo-800',
                pink: 'bg-pink-100 text-pink-800',
                orange: 'bg-orange-100 text-orange-800',
                teal: 'bg-teal-100 text-teal-800'
            };
            
            examCard.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <span class="inline-block px-3 py-1 ${colorClasses[exam.color]} rounded-full text-sm font-medium">${exam.name}</span>
                    <span class="text-gray-500 text-sm">${exam.questions.length} preguntas</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">${exam.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${exam.description}</p>
                <div class="flex items-center text-blue-600 font-medium">
                    <span>Iniciar examen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            `;
            
            examCard.addEventListener('click', () => startExam(exam.id));
            examsContainer.appendChild(examCard);
        });
    }

    // Resto de las funciones permanecen igual...
    // [startExam, showQuestion, selectOption, goToPreviousQuestion, goToNextQuestion, etc.]
    // Función para iniciar un examen específico
    function startExam(examId) {
        if (!examData || !examData[examId]) {
            alert('Examen no disponible. Por favor, selecciona otro examen.');
            return;
        }

        currentExam = examId;
        currentQuestions = examData[examId].questions;
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);

        // Actualizar título del examen
        examTitle.textContent = `Examen: ${examData[examId].name}`;

        // Ocultar selección y mostrar examen
        examSelection.style.display = 'none';
        examSection.style.display = 'block';

        // Inicializar temporizador
        timeLeft = 1500; // 25 minutos
        updateTimerDisplay();
        startTimer();

        // Mostrar primera pregunta
        showQuestion(currentQuestionIndex);
    }

    // Función para mostrar una pregunta
    function showQuestion(index) {
        const question = currentQuestions[index];
        
        // Actualizar contador de preguntas
        questionCounter.textContent = `Pregunta ${index + 1} de ${currentQuestions.length}`;
        
        // Actualizar barra de progreso
        const progress = ((index + 1) / currentQuestions.length) * 100;
        progressFill.style.width = `${progress}%`;
        
        // Mostrar dominio
        domainText.textContent = question.domain;
        
        // Mostrar texto de la pregunta
        questionText.textContent = question.question;
        
        // Mostrar opciones
        optionsContainer.innerHTML = '';
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = `option-item flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 ${userAnswers[index] === i ? 'selected' : ''}`;
            optionElement.innerHTML = `
                <div class="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 mr-3 flex-shrink-0">
                    <span class="text-sm font-medium">${String.fromCharCode(65 + i)}</span>
                </div>
                <span>${option}</span>
            `;
            
            optionElement.addEventListener('click', () => selectOption(i));
            optionsContainer.appendChild(optionElement);
        });
        
        // Actualizar estado de botones
        prevBtn.disabled = index === 0;
        nextBtn.disabled = false;
        submitBtn.style.display = index === currentQuestions.length - 1 ? 'block' : 'none';
    }

    // Función para seleccionar una opción
    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        
        // Actualizar visualización de opciones
        const options = document.querySelectorAll('.option-item');
        options.forEach((option, i) => {
            if (i === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }

    // Función para ir a la pregunta anterior
    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    }

    // Función para ir a la siguiente pregunta
    function goToNextQuestion() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    }

    // Función para iniciar el temporizador
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                finishExam();
            }
        }, 1000);
    }

    // Función para actualizar la visualización del tiempo
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Cambiar color cuando quede poco tiempo
        if (timeLeft < 300) { // 5 minutos
            timeDisplay.classList.add('text-red-300');
        } else {
            timeDisplay.classList.remove('text-red-300');
        }
    }

    // Función para finalizar el examen
    function finishExam() {
        clearInterval(timer);
        
        // Calcular puntuación
        let correctAnswers = 0;
        currentQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                correctAnswers++;
            }
        });
        
        const score = (correctAnswers / currentQuestions.length) * 100;
        const passed = score >= 70; // 70% para aprobar
        
        // Mostrar resultados
        showResults(score, passed, correctAnswers);
    }

    // Función para mostrar resultados
    function showResults(score, passed, correctAnswers) {
        examSection.style.display = 'none';
        resultsModal.style.display = 'flex';
        
        // Actualizar información de resultados
        scorePercentage.textContent = `${score.toFixed(1)}%`;
        scorePercentage.className = `text-5xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`;
        
        resultMessage.textContent = passed ? '¡Felicidades! Has aprobado el examen.' : 'Necesitas más preparación. Sigue estudiando.';
        resultMessage.className = `text-xl font-semibold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`;
        
        examName.textContent = `Examen: ${examData[currentExam].name}`;
        
        // Mostrar resultados detallados
        detailedResults.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            const questionResult = document.createElement('div');
            questionResult.className = `p-4 border rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
            
            questionResult.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-gray-800">Pregunta ${index + 1}</h3>
                    <span class="inline-block px-2 py-1 rounded text-xs font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${isCorrect ? 'Correcta' : 'Incorrecta'}
                    </span>
                </div>
                <p class="text-gray-700 mb-2">${question.question}</p>
                <div class="mb-2">
                    <p class="text-sm font-medium text-gray-600">Tu respuesta:</p>
                    <p class="${isCorrect ? 'text-green-700' : 'text-red-700'}">${userAnswer !== null ? question.options[userAnswer] : 'No respondida'}</p>
                </div>
                ${!isCorrect ? `
                    <div class="mb-2">
                        <p class="text-sm font-medium text-gray-600">Respuesta correcta:</p>
                        <p class="text-green-700">${question.options[question.correctAnswer]}</p>
                    </div>
                ` : ''}
                <div>
                    <p class="text-sm font-medium text-gray-600">Explicación:</p>
                    <p class="text-gray-700">${question.explanation}</p>
                </div>
            `;
            
            detailedResults.appendChild(questionResult);
        });
    }

    // Función para reiniciar el examen
    function restartExam() {
        resultsModal.style.display = 'none';
        startExam(currentExam);
    }

    // Función para volver a la selección de exámenes
    function backToExams() {
        resultsModal.style.display = 'none';
        examSelection.style.display = 'block';
    }
});