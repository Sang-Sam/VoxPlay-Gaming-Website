const questions = [
	{
	  question: "What is 2 + 2?",
	  options: ["3", "4", "5", "6"],
	  correctAnswer: "4"
	},
	{
	  question: "What is the capital of France?",
	  options: ["London", "Paris", "Berlin", "Rome"],
	  correctAnswer: "Paris"
	}
	// Add more questions here
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let submitted = false;

  function loadQuestion() {
	const questionElement = document.getElementById('question');
	const optionsElement = document.getElementById('options');
	const currentQuestion = questions[currentQuestionIndex];

	questionElement.textContent = currentQuestion.question;
	optionsElement.innerHTML = '';

	currentQuestion.options.forEach(option => {
	  const optionElement = document.createElement('input');
	  optionElement.type = 'radio';
	  optionElement.name = 'answer';
	  optionElement.value = option;
	  
	  const labelElement = document.createElement('label');
	  labelElement.textContent = option;

	  const divElement = document.createElement('div');
	  divElement.appendChild(optionElement);
	  divElement.appendChild(labelElement);

	  optionsElement.appendChild(divElement);
	});
  }

  function checkAnswer() {
	if (submitted) {
	  alert("You've already submitted the quiz!");
	  return;
	}

	const selectedOption = document.querySelector('input[name="answer"]:checked');
	if (!selectedOption) {
	  alert('Please select an answer');
	  return;
	}

	const selectedAnswer = selectedOption.value;
	const correctAnswer = questions[currentQuestionIndex].correctAnswer;

	if (selectedAnswer === correctAnswer) {
	  score++;
	}

	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
	  loadQuestion();
	} else {
	  document.getElementById('score').textContent = `Quiz finished! Your score: ${score}/${questions.length}`;
	}
  }

  function checkAns() {
	if (submitted) {
	  alert("You've already submitted the quiz!");
	  return;
	}

	submitted = true;

	// Perform any actions needed upon submission
	// For example, display the final score
	document.getElementById('score').textContent = `Quiz submitted! Your score: ${score}/${questions.length}`;
  }

  // Initial load
  loadQuestion();