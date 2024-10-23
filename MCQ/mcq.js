const nextButton = document.getElementById('next');
        const question1 = document.getElementById('question1');
        const question2 = document.getElementById('question2');
        const questionCounter = document.querySelector('.number');
        const timerDisplay = document.querySelector('.time-left');
        let currentQuestion = 1;
        let score = 0;
        let timer;
        const correctAnswers = {
            captains: "MS",
            highest:"Rohit1"
        };

        function startTimer() {
            let timeLeft = 10;
            timerDisplay.textContent = timeLeft + 's';
            timer = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft + 's';
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert('Time is up! Moving to the next question.');
                    nextQuestion();
                }
            }, 1000);
        }

        function checkAnswer() {
            const selectedCaptain = document.querySelector('input[name="captains"]:checked');
            const selectedCapital = document.querySelector('input[name="capital"]:checked');

            if (currentQuestion === 1 && selectedCaptain) {
                if (selectedCaptain.value === correctAnswers.captains) {
                    score++;
                }
            }

            if (currentQuestion === 2 && selectedCapital) {
                if (selectedCapital.value === correctAnswers.capital) {
                    score++;
                }
            }
        }

        function nextQuestion() {
            checkAnswer();
            clearInterval(timer);

            if (currentQuestion === 1) {
                question1.style.display = 'none';
                question2.style.display = 'block';
                currentQuestion++;
                questionCounter.textContent = '2 of 2 Questions';
                startTimer();
            } else {
                alert('Quiz completed! Your score is: ' + score + ' out of 2');

            }
        }

        nextButton.addEventListener('click', nextQuestion);
        startTimer();