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
            examCard.className = `premium-card p-6 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5`;
            examCard.setAttribute('data-exam', exam.id);
            
            const badgeColors = {
                blue: 'bg-blue-50 border-blue-100 text-blue-700',
                green: 'bg-emerald-50 border-emerald-100 text-emerald-700',
                purple: 'bg-purple-50 border-purple-100 text-purple-700',
                yellow: 'bg-amber-50 border-amber-100 text-amber-700',
                red: 'bg-rose-50 border-rose-100 text-rose-700',
                indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
                pink: 'bg-pink-50 border-pink-100 text-pink-700',
                orange: 'bg-orange-50 border-orange-100 text-orange-700',
                teal: 'bg-teal-50 border-teal-100 text-teal-700'
            };
            
            examCard.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="inline-block px-3 py-1 ${badgeColors[exam.color] || 'bg-slate-50 border-slate-100 text-slate-700'} border rounded-full text-xs font-bold tracking-wide uppercase">${exam.name.split(':')[0]}</span>
                        <span class="text-slate-400 text-xs font-semibold flex items-center">
                            <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            ${exam.questions.length} preguntas
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">${exam.name}</h3>
                    <p class="text-slate-500 text-xs md:text-sm line-clamp-3 mb-6 leading-relaxed">${exam.description}</p>
                </div>
                <div class="flex items-center text-blue-600 font-bold text-sm mt-auto pt-4 border-t border-slate-100">
                    <span>Iniciar Examen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200">
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
            const isSelected = userAnswers[index] === i;
            const optionElement = document.createElement('div');
            optionElement.className = `option-item flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${isSelected ? 'selected ring-2 ring-blue-500/20' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'}`;
            optionElement.innerHTML = `
                <div class="option-badge flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3.5 flex-shrink-0 transition-colors duration-200 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}">
                    <span class="text-sm">${String.fromCharCode(65 + i)}</span>
                </div>
                <span class="text-slate-700 text-sm md:text-base font-medium leading-relaxed">${option}</span>
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
            const badge = option.querySelector('.option-badge');
            if (i === optionIndex) {
                option.className = `option-item flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 selected ring-2 ring-blue-500/20`;
                if (badge) {
                    badge.className = `option-badge flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3.5 flex-shrink-0 transition-colors duration-200 bg-blue-600 text-white`;
                }
            } else {
                option.className = `option-item flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50`;
                if (badge) {
                    badge.className = `option-badge flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3.5 flex-shrink-0 transition-colors duration-200 bg-slate-100 text-slate-600`;
                }
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
        scorePercentage.className = `text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${passed ? 'text-emerald-600' : 'text-rose-600'}`;
        
        resultMessage.textContent = passed ? '¡Excelente trabajo! Has aprobado satisfactoriamente.' : 'No has alcanzado la puntuación de aprobación. ¡Sigue adelante!';
        resultMessage.className = `text-lg md:text-xl font-extrabold ${passed ? 'text-emerald-600' : 'text-rose-600'}`;
        
        examName.textContent = `Examen: ${examData[currentExam].name}`;
        
        // Mostrar resultados detallados
        detailedResults.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            const questionResult = document.createElement('div');
            questionResult.className = `p-6 border rounded-2xl ${isCorrect ? 'bg-emerald-50/40 border-emerald-200/60' : 'bg-rose-50/40 border-rose-200/60'} space-y-4 shadow-sm`;
            
            questionResult.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="space-y-1">
                        <h4 class="font-bold text-slate-900 text-base md:text-lg">Pregunta ${index + 1}</h4>
                        <div class="flex items-center space-x-2">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dominio:</span>
                            <span class="px-2 py-0.5 bg-slate-100 border border-slate-200/60 text-slate-600 rounded text-[10px] font-bold uppercase">${question.domain}</span>
                        </div>
                    </div>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-200/60' : 'bg-rose-100 text-rose-800 border border-rose-200/60'}">
                        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${isCorrect ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}"></path></svg>
                        ${isCorrect ? 'Correcta' : 'Incorrecta'}
                    </span>
                </div>
                <p class="text-slate-800 font-medium text-sm md:text-base leading-relaxed">${question.question}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div class="p-3 bg-white/60 border border-slate-200/40 rounded-xl">
                        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Tu respuesta:</p>
                        <p class="text-sm font-semibold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">${userAnswer !== null ? `(${String.fromCharCode(65 + userAnswer)}) ${question.options[userAnswer]}` : 'No respondida'}</p>
                    </div>
                    ${!isCorrect ? `
                    <div class="p-3 bg-white/60 border border-slate-200/40 rounded-xl">
                        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Respuesta correcta:</p>
                        <p class="text-sm font-semibold text-emerald-700">(${String.fromCharCode(65 + question.correctAnswer)}) ${question.options[question.correctAnswer]}</p>
                    </div>
                    ` : ''}
                </div>
                <div class="p-4 bg-blue-50/40 border border-blue-100/50 rounded-xl space-y-1">
                    <p class="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center">
                        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Explicación PMP MASTER 8:
                    </p>
                    <p class="text-slate-600 text-xs md:text-sm leading-relaxed">${question.explanation}</p>
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