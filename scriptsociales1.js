'use strict';

const quizQuestions = [{
        question: '<img src="imagenes/buenosaires.png" width="70%">',
        answers: [
            'Buenos Aires', 'Catamarca'
        ],
        correctAnswer: 'Buenos Aires'
    },
    {
        question: '<img src="imagenes/santafe.png" width="40%">',
        answers: [
            'Santa Fe', 'Jujuy'
        ],
        correctAnswer: 'Santa Fe'
    },
    {
        question: '<img src="imagenes/cordoba.png" width="40%">',
        answers: [
            'San Luis', 'Cordoba'
        ],
        correctAnswer: 'Cordoba'
    },
    {
        question: '<img src="imagenes/mendoza.png" width="40%">',
        answers: [
            'San Juan', 'Mendoza'
        ],
        correctAnswer: 'Mendoza'
    },
    {
        question: '<img src="imagenes/tucuman.png" width="60%">',
        answers: [
            'Tucuman', 'Salta'
        ],
        correctAnswer: 'Tucuman'
    },
    {
        question: '<img src="imagenes/rionegro.png" width="70%">',
        answers: [
            'Neuquen', 'Rio Negro'
        ],
        correctAnswer: 'Rio Negro'
    },
    {
        question: '<img src="imagenes/entrerios.png" width="40%">',
        answers: [
            'Entre Rios', 'Misiones'
        ],
        correctAnswer: 'Entre Rios'
    },
    {
        question: '<img src="imagenes/catamarca.png" width="50%">',
        answers: [
            'Rio Negro', 'Catamarca'
        ],
        correctAnswer: 'Catamarca'
    },
    {
        question: '<img src="imagenes/formosa.png" width="60%">',
        answers: [
            'Formosa', 'La Rioja'
        ],
        correctAnswer: 'Formosa'
    },
    {
        question: '<img src="imagenes/sanluis.png" width="30%">',
        answers: [
            'San Luis', 'Mendoza'
        ],
        correctAnswer: 'San Luis'
    }
];

let questionIndex = 0;
let answersCorrect = 0;
let answersIncorrect = 0;

function renderTitle() {
    $('div.content-box').append(`
		<header role='banner' class='quiz-name'>
		</header>
		<main role='main'></main>
	`);
}

function renderStartScreen() {
    $('main').append(`
	<h1 class='the-quiz-header'>Selecciona cual provincia de argentina es la imagen que se visualiza</h1>
		<div id="centrado" class='start-screen'>
		<img src="imagenes/argentina.png" width="30%"><br/><br/>
			</div>
			<br/>
			<div id="centrado2" class='start-screen'>
		<button class='start btn btn-primary btn-lg'>Comenzar el cuestionario <i class="fas fa-arrow-right"></i></button>
		</div>
	`);
}

function handleStartClick() {
    $('main').on('click', '.start', event => {
        event.preventDefault();
        renderQuestions();
    });
}

function renderQuestions() {
    const questionNumber = parseInt([questionIndex]) + 1;
    const quizForm = `
    <div class='question-box'>
     <p class='question-number'>Pregunta ${questionNumber} de ${quizQuestions.length}</p>
     <form>
        <fieldset>
          <legend class='question'>${quizQuestions[questionIndex].question}</legend>
          <button class='answer' value='${quizQuestions[questionIndex].answers[0]}'>${quizQuestions[questionIndex].answers[0]}</button>
          <button class='answer' value='${quizQuestions[questionIndex].answers[1]}'>${quizQuestions[questionIndex].answers[1]}</button>
        </fieldset>
     </form>
   <p class='current-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
  </div>
  `;
    $('main').html(quizForm);
}

function handleAnswerClick() {
    $('main').on('click', '.answer', event => {
        event.preventDefault();
        let answerButton = event.target.value;
        if (answerButton == quizQuestions[questionIndex].correctAnswer) {
            answersCorrect++;
            renderCorrectFeedBack();
            handleProgressButton();
        } else {
            answersIncorrect++;
            renderIncorrectFeedBack();
            handleProgressButton();
        }

    });
}

function renderCorrectFeedBack() {
    const feedback = `
		<div class='feedback'>
			<img src='imagenes/captura_tilde.png' alt='bien" text' class='feedback-image'/>
			<p class='feedback-text'>Correcto!</p>
			<p class='feedback-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
		</div>
		`;
    $('main').html(feedback);
}

function renderIncorrectFeedBack() {
    const feedback = `
		<div class='feedback'>
			<img src='imagenes/captura_mal.png' alt='mal' class='feedback-image'/></a>
			<p class='feedback-text'>Incorrecto! La respuesta correcta es "${quizQuestions[questionIndex].correctAnswer}"</p>
			<p class='feedback-score'>Tenes ${answersCorrect} correctas y ${answersIncorrect} incorrectas.</p>
		</div>
		`;
    $('main').html(feedback);
}

function handleProgressButton() {
    if (questionIndex + 1 < quizQuestions.length) {
        $('.feedback').append(`
		<button id="btn-grad" class='next-question'> Siguiente </button>
		`);
    } else {
        $('.feedback').append(`
			<button class='final-score'>Ver puntaje final</button>
		`);
    }
}

function handleProgressClick() {
    $('main').on('click', '.next-question', event => {
        event.preventDefault();
        questionIndex++;
        renderQuestions();
    });
    $('main').on('click', '.final-score', event => {
        event.preventDefault();
        questionIndex++;
        renderEndScreen();
    });
}

function renderEndScreen() {
    const endScreen = `
		<div class='end-screen'>
			<img src='imagenes/bien.gif' alt='gif muy bien' class='end-gif'/>   		
			<p class='end-score'>Respondiste ${answersCorrect} de ${quizQuestions.length} correctamente!</p>
      		<button id="btn-grad" class='play-again'>Jugar de nuevo</button>
    	</div>
    `;
    $('main').html(endScreen);
}

function handlePlayAgainClick() {
    $('main').on('click', '.play-again', event => {
        event.preventDefault();
        questionIndex = 0;
        answersCorrect = 0;
        answersIncorrect = 0;
        renderQuestions();
    });
}

function handleQuiz() {
    renderTitle();
    renderStartScreen();
    handleStartClick();
    handleAnswerClick();
    handleProgressClick();
    handlePlayAgainClick();
}

$(handleQuiz);