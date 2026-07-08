// script.js
class PMPExam {
    constructor() {
        this.currentQuestion = 0;
        this.selectedAnswers = {};
        this.timeLeft = 1500; // 10 minutes in seconds
        this.timer = null;
        this.isExamFinished = false;
        this.examStarted = false;
        
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        // Welcome section elements
        this.welcomeSection = document.getElementById('welcome-section');
        this.startExamBtn = document.getElementById('start-exam-btn');
        
        // Exam section elements
        this.examSection = document.getElementById('exam-section');
        this.questionText = document.getElementById('question-text');
        this.domainText = document.getElementById('domain-text');
        this.optionsContainer = document.getElementById('options-container');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.finishBtn = document.getElementById('finish-btn');
        this.timeDisplay = document.getElementById('time-display');
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        
        // Results modal elements
        this.resultsModal = document.getElementById('results-modal');
        this.restartBtn = document.getElementById('restart-btn');
    }
    
    setupEventListeners() {
        this.startExamBtn.addEventListener('click', () => this.startExam());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.confirmFinishExam());
        this.finishBtn.addEventListener('click', () => this.confirmFinishExam());
        this.restartBtn.addEventListener('click', () => this.restartExam());
    }
    
    startExam() {
        this.examStarted = true;
        this.welcomeSection.style.display = 'none';
        this.examSection.style.display = 'block';
        this.loadQuestion();
        this.startTimer();
    }
    
    loadQuestion() {
        const question = questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        this.domainText.textContent = question.domain;
        
        // Add class based on domain for styling
        this.domainText.className = 'domain-badge';
        if (question.domain.toLowerCase().includes('people')) {
            this.domainText.classList.add('people');
        } else if (question.domain.toLowerCase().includes('process')) {
            this.domainText.classList.add('process');
        } else if (question.domain.toLowerCase().includes('business')) {
            this.domainText.classList.add('business-environment');
        }
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Create new options
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            if (this.selectedAnswers[question.id] === index) {
                optionBtn.classList.add('selected');
            }
            
            const optionLetter = document.createElement('span');
            optionLetter.className = 'option-letter';
            optionLetter.textContent = String.fromCharCode(65 + index);
            
            const optionText = document.createElement('span');
            optionText.textContent = option;
            
            optionBtn.appendChild(optionLetter);
            optionBtn.appendChild(optionText);
            
            optionBtn.addEventListener('click', () => {
                this.selectAnswer(question.id, index);
            });
            
            this.optionsContainer.appendChild(optionBtn);
        });
        
        // Update UI
        this.updateQuestionCounter();
        this.updateProgress();
        this.updateNavigationButtons();
    }
    
    selectAnswer(questionId, answerIndex) {
        this.selectedAnswers[questionId] = answerIndex;
        this.loadQuestion(); // Refresh to show selected state
    }
    
    nextQuestion() {
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }
    
    updateQuestionCounter() {
        this.questionCounter.textContent = `Pregunta ${this.currentQuestion + 1} de ${questions.length}`;
    }
    
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestion === 0;
        
        const currentQuestionId = questions[this.currentQuestion].id;
        const hasAnswer = this.selectedAnswers[currentQuestionId] !== undefined;
        
        if (this.currentQuestion === questions.length - 1) {
            this.nextBtn.style.display = 'none';
            this.submitBtn.style.display = 'block';
            this.submitBtn.disabled = !hasAnswer;
        } else {
            this.nextBtn.style.display = 'block';
            this.submitBtn.style.display = 'none';
            this.nextBtn.disabled = !hasAnswer;
        }
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            if (this.timeLeft > 0 && !this.isExamFinished) {
                this.timeLeft--;
                this.updateTimerDisplay();
            } else if (this.timeLeft === 0 && !this.isExamFinished) {
                this.finishExam();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    confirmFinishExam() {
        if (confirm('¿Está seguro de que desea finalizar el examen? Una vez finalizado, no podrá regresar a las preguntas.')) {
            this.finishExam();
        }
    }
    
    finishExam() {
        clearInterval(this.timer);
        this.isExamFinished = true;
        this.showResults();
    }
    
    calculateScore() {
        let correct = 0;
        questions.forEach(question => {
            if (this.selectedAnswers[question.id] === question.correctAnswer) {
                correct++;
            }
        });
        return Math.round((correct / questions.length) * 100);
    }
    
    calculateDomainScores() {
        const domainStats = {
            'People': { total: 0, correct: 0 },
            'Process': { total: 0, correct: 0 },
            'Business Environment': { total: 0, correct: 0 }
        };
        
        questions.forEach(question => {
            const domain = question.domain;
            const isCorrect = this.selectedAnswers[question.id] === question.correctAnswer;
            
            if (domainStats[domain]) {
                domainStats[domain].total++;
                if (isCorrect) {
                    domainStats[domain].correct++;
                }
            }
        });
        
        // Calculate percentages
        const domainPercentages = {};
        for (const domain in domainStats) {
            if (domainStats[domain].total > 0) {
                domainPercentages[domain] = Math.round((domainStats[domain].correct / domainStats[domain].total) * 100);
            } else {
                domainPercentages[domain] = 0;
            }
        }
        
        return domainPercentages;
    }
    
    showResults() {
        const score = this.calculateScore();
        const isPassing = score >= 70;
        const domainScores = this.calculateDomainScores();
        
        // Update score display
        const scorePercentage = document.getElementById('score-percentage');
        scorePercentage.textContent = `${score}%`;
        scorePercentage.className = 'score-percentage';
        scorePercentage.classList.add(isPassing ? 'pass' : 'fail');
        
        // Update result message
        const resultMessage = document.getElementById('result-message');
        if (isPassing) {
            resultMessage.textContent = '¡Felicitaciones! Has aprobado';
            resultMessage.className = 'result-message pass';
        } else {
            resultMessage.textContent = 'Necesitas más práctica';
            resultMessage.className = 'result-message fail';
        }
        
        // Generate detailed results
        const detailedResults = document.getElementById('detailed-results');
        detailedResults.innerHTML = '';
        
        // Add domain performance section
        const domainPerformance = document.createElement('div');
        domainPerformance.className = 'domain-performance';
        domainPerformance.innerHTML = `
            <h3>Rendimiento por Dominio</h3>
            <div class="domain-scores">
                <div class="domain-score-item">
                    <div class="domain-name people">People</div>
                    <div class="domain-score">${domainScores['People']}%</div>
                </div>
                <div class="domain-score-item">
                    <div class="domain-name process">Process</div>
                    <div class="domain-score">${domainScores['Process']}%</div>
                </div>
                <div class="domain-score-item">
                    <div class="domain-name business-environment">Business Environment</div>
                    <div class="domain-score">${domainScores['Business Environment']}%</div>
                </div>
            </div>
        `;
        detailedResults.appendChild(domainPerformance);
        
        // Add only incorrect questions section
        const incorrectQuestions = questions.filter(question => {
            return this.selectedAnswers[question.id] !== question.correctAnswer;
        });
        
        if (incorrectQuestions.length > 0) {
            const incorrectResults = document.createElement('div');
            incorrectResults.className = 'questions-results';
            incorrectResults.innerHTML = '<h3>Preguntas Incorrectas</h3>';
            
            incorrectQuestions.forEach((question, index) => {
                const userAnswer = this.selectedAnswers[question.id];
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item incorrect';
                
                let resultHTML = `
                    <h3>Pregunta ${questions.findIndex(q => q.id === question.id) + 1}: ${question.question}</h3>
                    <div class="domain-info">Dominio: ${question.domain}</div>
                    <p><strong>Tu respuesta:</strong> ${userAnswer !== undefined ? question.options[userAnswer] : 'No respondida'}</p>
                    <p><strong class="correct-answer">Respuesta correcta:</strong> ${question.options[question.correctAnswer]}</p>
                    <p><strong class="explanation">Explicación:</strong> ${question.explanation}</p>
                `;
                
                resultItem.innerHTML = resultHTML;
                incorrectResults.appendChild(resultItem);
            });
            
            detailedResults.appendChild(incorrectResults);
        } else {
            // If all answers are correct, show a congratulatory message
            const allCorrectMessage = document.createElement('div');
            allCorrectMessage.className = 'all-correct-message';
            allCorrectMessage.innerHTML = `
                <div style="text-align: center; padding: 20px; background: #f0fdf4; border-radius: 12px; border: 2px solid #10b981;">
                    <h3>¡Excelente trabajo!</h3>
                    <p>Has respondido correctamente todas las preguntas.</p>
                </div>
            `;
            detailedResults.appendChild(allCorrectMessage);
        }
        
        // Show modal
        this.resultsModal.style.display = 'flex';
    }
    
    restartExam() {
        // Reset exam state
        this.currentQuestion = 0;
        this.selectedAnswers = {};
        this.timeLeft = 1500;
        this.isExamFinished = false;
        this.examStarted = false;
        
        // Hide modal and show welcome section
        this.resultsModal.style.display = 'none';
        this.welcomeSection.style.display = 'block';
        this.examSection.style.display = 'none';
        
        // Clear timer
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // Reset timer display
        this.timeDisplay.textContent = '25:00';
    }
}

// Initialize the exam when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PMPExam();
});